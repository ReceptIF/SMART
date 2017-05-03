var Notification = require('../model/notification');
var Transaction = require('../model/transaction');
var Comment = require('../model/comment');
var User = require('../model/user');


module.exports = function (server) {

    // GET
    server.get('/notifications', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Transaction, as: 'transaction'},
                {model: Comment, as: 'comment'}
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
                {model: Transaction, as: 'transaction'},
                {model: Comment, as: 'comment'}
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
                {model: Transaction, as: 'transaction'},
                {model: Comment, as: 'comment'}
            ], where: {userId: request.params.id},
            order: [['createdAt', 'DESC']]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/notifications/transaction/:id', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Transaction, as: 'transaction'},
                {model: Comment, as: 'comment'}
            ], where: {transactionId: request.params.id}
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/notifications/comment/:id', function (request, response) {
        Notification.findAll({
            include: [
                {model: User, as: 'user'},
                {model: Transaction, as: 'transaction'},
                {model: Comment, as: 'comment'}
            ], where: {commentId: request.params.id}
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.put('/notifications/user/:id/read', function (request, response) {
        Notification.update({read: true}, {
            where: {userId: request.params.id}
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