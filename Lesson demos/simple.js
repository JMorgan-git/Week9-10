const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((request,responce) => {
    responce.statusCode = 200;
    responce.setHeader('Content-type', 'text/html');
    responce.end('<h1>Hello world, big up your main G</h1>')
});

server.listen(port,host, () => {
    console.log(`Server up on ${host}:${port}`);
});