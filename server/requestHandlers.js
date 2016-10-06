var fs = require('fs'),
    path = require('path'),
    baseRoot = '../client';

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

exports.addFile = addFile;
exports.getContentType = getContentType;
