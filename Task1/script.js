'use strict';
let a = 0;
let b = 0;
const http = require('http');
const server = http.createServer(function(request, response) {


    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.url === "/") {
        a += 1;
        response.write("<h2>Home </h2><br>количество просмотров " + a);
        response.end();
    } else if (request.url == "/about") {
        b += 1;
        response.write("<h2>About</h2><br>количество просмотров " + b);
        response.end();

    } else {
        response.write("<h2>Not found</h2>");
        response.end();
    }

});
const port = 3000;
server.listen(port, () => {
    console.log('server on port ' + port)
});