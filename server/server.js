var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var Model = require('./model');

// Load resources to be accessed without specific services
var server = express();
server.use(bodyParser.urlencoded({extended: true}));
server.use('/resources', express.static(path.resolve('../ihm/resources')));

server.get('/', function (request, response) {
    response.send('AH !');
});

require('./controller/userController')(server);
require('./controller/transactionController')(server);
require('./controller/announceController')(server);
require('./controller/announceTypeController')(server);
require('./controller/cityController')(server);
require('./controller/commentController')(server);


http.createServer(server).listen(8080, function () {
    console.log('[LOG] Server started!');
});
