var http = require('http');
var express = require('express');
var session      = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var jwt    = require('jsonwebtoken');

var Model = require('./model');

// Load resources to be accessed without specific services
var server = express();
server.use(bodyParser.json());                          // to support JSON-encoded bodies
server.use(bodyParser.urlencoded({extended: true}));       // to support URL-encoded bodies
server.use('/resources', express.static(path.resolve('../ihm/resources')));


server.set('tokenSecret', 'LicorneMabelPULLReceptif');
var apiRoutes = express.Router();
apiRoutes.use(function(req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['token'];
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, server.get('tokenSecret'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decodedToken = decoded.user;
                console.log(req.decodedToken);
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });
    }
});

// apply the routes to our application with the prefix /api
server.use('/addresse', apiRoutes);
server.use('/addresses', apiRoutes);
server.use('/announce', apiRoutes);
server.use('/announces', apiRoutes);
server.use('/announceType', apiRoutes);
server.use('/announceTypes', apiRoutes);
server.use('/city', apiRoutes);
server.use('/cities', apiRoutes);
server.use('/comment', apiRoutes);
server.use('/comments', apiRoutes);
server.use('/notification', apiRoutes);
server.use('/notifications', apiRoutes);
server.use('/transaction', apiRoutes);
server.use('/transactions', apiRoutes);
server.use('/user', apiRoutes);
server.use('/users', apiRoutes);

require('./controller/userController')(server);
require('./controller/transactionController')(server);
require('./controller/announceController')(server);
require('./controller/announceTypeController')(server);
require('./controller/cityController')(server);
require('./controller/commentController')(server);
require('./controller/addressController')(server);
require('./controller/notificationController')(server);




server.get('/', function (request, response) {
    response.send('AH !');
});

http.createServer(server).listen(8080, function () {
    console.log('[LOG] Server started!');
});
