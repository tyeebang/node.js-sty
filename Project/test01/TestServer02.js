const HTTP = require('http');

HTTP.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'Text/html; charset=UTF-8'});
    res.write('<h1>집가고 싶다고 시발ㄹ</h1>');
    res.write('<img src="./img.jpg" alt="img">');
    res.end('<p>수업 언제 끝나노</p>');
}).listen(8080, () => {
    console.log('8080 port listen....................................................................................');
});