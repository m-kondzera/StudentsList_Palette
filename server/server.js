var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    requestHandlers = require('./requestHandlers');

function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname,
        contentType;

    if (pathname === '') {
        pathname = '/index.html';
    }
    if (pathname === '/getStudents') {
        pathname = '/../server/students.json';
    } 
    if (pathname === '/getColors') {
        pathname = '/../server/colors.json';
    }

    contentType = requestHandlers.getContentType(pathname);

    if (pathname.indexOf('.css') !== -1 || pathname.indexOf('.js') !== -1 
        || pathname.indexOf('.html') !== -1 || pathname.indexOf('.json') !== -1
        || pathname.indexOf('.ico') !== -1) {

        requestHandlers.addFile(pathname, response, contentType);
    } else {
        pathname = '/index.html';
        requestHandlers.addFile(pathname, response, contentType);
    }
}

http.createServer(onRequest).listen(3000);

console.log('Server is started');
