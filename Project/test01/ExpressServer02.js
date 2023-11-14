const express = require('express');
const app = express();
app.set('port', process.env.PORT || 8080);

app.get('/IWannaGoHome', (req, res) => {
    res.sendFile(__dirname + '/ExpressServer02.html');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), 'port listen');
});