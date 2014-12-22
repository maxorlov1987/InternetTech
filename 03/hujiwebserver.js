var hujiNet         = require("./hujinet"),
    serverSettings  = require("./settings/settings"),
    debug           = require('./debugging/debug');

var lPort,
    server;



//TODO:: In case the server could not start it should execute the callback with a custom err object that contains the error reason.
//TODO:: Add serverID.
exports.start = function (port, rootFolder, callback) {
    lPort = port;
    server = hujiNet.getSocket(lPort, serverSettings.HOST_ADDRESS, rootFolder);
    debug.devlog("Server is up and running");
};

//TODO:: Execute the callback once the server is down.
exports.stop = function (serverID, callback) {
    server.close();
    debug.devlog("Stopping server");
};

