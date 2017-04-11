var User = require('../model/user');

module.exports = function (server) {

    // GET
    server.get('/users', function (request, response) {
        User.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/user', function (request, response) {
        User.create(request.body).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};