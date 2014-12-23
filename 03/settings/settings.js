exports.SERVER_VERSION = 'node.js v0.10.33';



exports.CR = '\r';
exports.LF = '\n';
exports.CRLF = '\r\n';

exports.CONTENT_TYPES={
    js: 'application/javascript',
    txt: 'text/plain',
    html: 'text/html',
    css: 'text/css',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    gif: 'image/gif',
    png: 'image/png',
    ico: 'image/x-ico'
};

exports.STATUS_CODES = {
    200 : 'OK',
    404 : 'Not Found',
    405 : 'Method Not Allowed',
    500 : 'Parsing Error',
    501 : 'Not Implemented',
    505 : 'HTTP Version not supported'
};

exports.ENCODING = 'utf-8';

exports.HTTP_METHODS = {
    GET : 'GET',
    POST : 'POST',
    HEAD : 'HEAD',
    PUT : 'PUT',
    DELETE: 'DELETE'
};

exports.LAST_REQUEST_TIMEOUT_SEC = 2;


exports.HTTP_SUPPORTED_VERSIONS = {
    "1.0" : 'HTTP/1.0',
    "1.1" : 'HTTP/1.1'
};

exports.HOST_ADDRESS = 'localhost';

exports.PAGE_NOT_FOUND_IMAGE_PATH = '/home/maxim/WebstormProjects/InternetTech/03/tests/404.jpg';
