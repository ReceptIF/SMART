var Announce = require('../model/announce');

module.exports = function (server) {

    server.get('/announces', function (request, response) {
        Announce.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};