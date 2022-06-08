const http = require('http');
const URL = require('url');
const fs = require('fs').promises;

const host = 'localhost';
const port = 3000;

const serve = (request, response, file) => {

    fs.readFile(__dirname + `/static/${file}`)

      .then(data => {

        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.end(data);
      })
      .catch(error => {
        console.error(error.message);
        notFound(request, response);
      });
}

const notFound = (request, response) => {
    response.statusCode = 404;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Page not found</h1>');
}

const methodNotAllowed= (request, response) => {
    response.statusCode = 405;
    response.setHeader('Content-type', 'text/html');
    response.end('<h1>Method not allowed</h1>');
}

const requestHandler = (request, response) => {
    const url = URL.parse(request.url, false);
    if(request.method !== 'GET'){
        methodNotAllowed(request, response);
        return;
    }
    switch (url.pathname) {
        case "/":
            "index.html"
            serve(request, response, "index.html");
            break;  
        case "/about":
            serve(request, response, "about.html");
            break;
        case "/project":
            serve(request, response, "project.html");
            break;  
        default:
            notFound(request, response);
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, host, () => {
    console.log(`Server up on ${host}:${port}`);
});