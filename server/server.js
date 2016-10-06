var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var baseRoot = '../client';

function onRequest (request, response) {
    var pathname = url.parse(request.url).pathname,
        contentType = getContentType(pathname);

    if (pathname === '/') {
        pathname = '/index.html';
    } if (pathname === '/getStudents') {
        pathname = '/../server/students.json';
    }

    if (pathname.indexOf('.css') != -1 || pathname.indexOf('.js') != -1 || pathname.indexOf('.html') != -1 || pathname.indexOf('.json') != -1) {
        addFile(pathname, response, contentType);
    }
}

http.createServer(onRequest).listen(3000);

console.log('Server is started');

function addFile(pathname, response, contentType) {
    fs.readFile(baseRoot + pathname, function (err, data) {
            if (err) {
                response.end("File wasn't found");
            }

            response.writeHead(200, {"Content-Type": contentType});
            response.end(data);
    });
}

function getContentType (pathname) {
    var extname = String(path.extname(pathname)).toLowerCase(),
        mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.wav': 'audio/wav',
            '.mp4': 'video/mp4',
            '.woff': 'application/font-woff',
            '.ttf': 'applilcation/font-ttf',
            '.eot': 'application/vnd.ms-fontobject',
            '.otf': 'application/font-otf',
            '.svg': 'application/image/svg+xml'
        };

    return mimeTypes[extname];
}