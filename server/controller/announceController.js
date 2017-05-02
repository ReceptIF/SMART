var Announce = require('../model/announce');
var AnnounceType = require('../model/announceType');
var User = require('../model/user');
var Address = require('../model/address');
var Transaction = require('../model/transaction');

module.exports = function (server) {

    // GET
    server.get('/announces', function (request, response) {
        Announce.findAll({
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announces/open', function (request, response) {
        Announce.findAll({
            where: {closed: false},
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // GET announces by clientID
    server.get('/announces/by/:authorId', function (request, response) {
        Announce.findAll({
            where: {authorId: request.params.authorId},
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/:id', function (request, response) {
        Announce.findById(request.params.id, {
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
        }).then(function (announce) {
            Transaction.find({
                where: {
                    announceId: request.params.id,
                    buyerOk: true,
                    sellerOk: true
                },
                include: [
                    {model: User, as: 'seller'},
                    {model: User, as: 'buyer'}
                ]
            }).then(function (data) {
                announce.dataValues.acceptedTransaction = data;
                response.send(announce ? announce : {});
            }, function (data) {
                response.send(announce ? announce : {});
            });
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/type/:type/sale', function (request, response) {
        Announce.findAll({
            where: {typeId: request.params.type, sale: true},
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/announce/type/:type/purchase', function (request, response) {
        Announce.findAll({
            where: {typeId: request.params.type, sale: false},
            include: [{model: AnnounceType, as: 'type'}, {model: User, as: 'author'}, {model: Address, as: 'address'}]
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