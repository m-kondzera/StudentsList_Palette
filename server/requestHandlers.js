var fs = require('fs'),
    path = require('path'),
    baseRoot = '../client';

function addFile(pathname, response, contentType) {
    fs.readFile(baseRoot + pathname, function (err, data) {
        if (err) {
            console.log('error ' + pathname + ' is not found');
            response.end(err);
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
            '.gif': 'image/gif'
        };

    return mimeTypes[extname];
}

exports.addFile = addFile;
exports.getContentType = getContentType;
