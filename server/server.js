const http = require('http');
const fs = require('fs');
const {getContentType, getFilePath} = require('./utils/utils');
const regex = require('./utils/regex');

const PORT = 8080;

http.createServer((request, response) => {
    let filePath;

    const url = request.url;
    if (regex.isCodeResource(url) || url === '/') {
        if (url === '/') {
            filePath = './dist/index.html';
        } else {
            filePath = getFilePath(url);
        }
    
        fs.readFile(filePath, function(error, content) {
            const contentType = getContentType(filePath);
    
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        });
    } else {

    }

}).listen(PORT);
