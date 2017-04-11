var AnnounceType = require('../model/announceType');

module.exports = function (server) {

    server.get('/announceTypes', function (request, response) {
        AnnounceType.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};