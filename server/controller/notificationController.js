var Notification = require('../model/notification');
var Announce = require('../model/announce');
var User = require('../model/user');


module.exports = function (server) {

    // GET
    server.get('/notifications', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Announce, as: 'announce'}
            ]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/notification/:id', function (request, response) {
        Notification.findById(request.params.id, {
            include: [
                {model: User, as: 'user'},
                {model: Announce, as: 'announce'}
            ]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/notifications/user/:id', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Announce, as: 'announce'}
            ], where: {userId: request.params.id}
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/notifications/announce/:id', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Announce, as: 'announce'}
            ], where: {announceId: request.params.id}
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // DELETE
    server.delete('/notification/:id', function (request, response) {
        Notification.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });


};