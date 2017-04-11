var City = require('../model/city');

module.exports = function (server) {

    server.get('/cities', function (request, response) {
        City.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};