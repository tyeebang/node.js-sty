const morgan = require('morgan');

const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중..');
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

let boardList = [];
let numOfBoard = 0;

app.get('/board', (req, res) => {
    res.send(boardList);
});

app.post('/board', (req, res) => {
    const board = {
        "id" : ++numOfBoard,
        "user_id" : req.body.user_id,
        "date" : new Date(),
        "title" : req.body.title,
        "content" : req.body.content
    };
    console.log('게시판' + JSON.stringify(board));
    boardList.push(board);

    res.redirect('/board');
})

const path = require('path');
app.use('/assets', express.static('assets'));
app.use('/assets/js', express.static('js'));
app.use('/assets/dist', express.static('dist'));
app.use('/', express.static(path.join(__dirname, '/')));

const cors = require('cors');
app.use(cors());

app.delete('/board/:id', (req, res) => {
    const findItem = boardList.find((item) => {
        return item.id == + req.params.id
    });
    const idx = boardList.indexOf(findItem);
    boardList.splice(idx, 1);

    res.redirect('/board');
})