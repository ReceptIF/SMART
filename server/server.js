var http = require('http');
var express = require('express');
var path = require('path');

var Model = require('./model');

// Load resources to be accessed without specific services
var server = express();
server.use('/resources', express.static(path.resolve('../ihm/resources')));

server.get('/', function (request, response) {
    Model.User.findAll().then(function (data) {
        response.send(data);
    }, function (data) {
        response.send({ah: 'AH !', error: data});
    });
});


http.createServer(server).listen(8080, function () {
    console.log('[LOG] Server started!');
});
