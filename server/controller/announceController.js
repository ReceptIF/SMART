var Announce = require('../model/announce');
var AnnounceType = require('../model/announceType');
var User = require('../model/user');

module.exports = function (server) {

    // GET
    server.get('/announces', function (request, response) {
        Announce.findAll({include: [AnnounceType, User]}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/:id', function (request, response) {
        Announce.findById(request.params.id, {include: [AnnounceType, User]}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/type/:type/sale', function (request, response) {
        Announce.findAll({
            where: {typeId: request.params.type, sale: true},
            include: [AnnounceType, User]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/type/:type/purchase', function (request, response) {
        Announce.findAll({
            where: {typeId: request.params.type, sale: false},
            include: [AnnounceType, User]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/announce', function (request, response) {
        Announce.create(request.body).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // PUT
    server.put('/announce', function (request, response) {
        Announce.update(request.body, {where: {id: request.body.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // DELETE
    server.delete('/announce/:id', function (request, response) {
        Announce.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};