const HTTP = require('http');
const FS = require('fs').promises;

const server = HTTP.createServer(async (req, res) => {
    try {
        const F = await FS.readFile('./hello.html');
        res.writeHead(200, { 'Content-Type': 'text.html; charset=UTF-8' });
        res.end(F);
    } catch(err) {
        console.log(err);
        res.writeHead(500, {'Content-Type':'text.html;charset=UTF-8'});
        res.end(err.message);
    }
}).listen(8080);

server.on('listening', () => {
    console.log('8080 port listen');
});

server.on('error', () => {
    console.log('error');
});