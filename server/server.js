var http = require('http');
var express = require('express');
var path = require('path');


// Load resources to be accessed without specific services
var server= express();
server.use('/resources', express.static(path.resolve('../ihm/resources')));

server.get('/', function(request, response) {
  response.send('AH!');
});


http.createServer(server).listen(8080, function () {
 console.log('[LOG] Server started!');
});
