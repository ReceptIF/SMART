var Transaction = require('../model/transaction');
var Announce = require('../model/announce');
var User = require('../model/user');

module.exports = function (server) {

    // GET
    server.get('/transactions', function (request, response) {
        Transaction.findAll({
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transaction/:id', function (request, response) {
        Transaction.findById(request.params.id, {
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transactions/buyer/:id', function (request, response) {
        Transaction.findAll({
            where: {buyerId: request.params.id},
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transactions/seller/:id', function (request, response) {
        Transaction.findAll({
            where: {sellerId: request.params.id},
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transactions/announce/:id', function (request, response) {
        Transaction.findAll({
            where: {
                announceId: request.params.id
            },
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transaction/announce/:id/accepted', function (request, response) {
        Transaction.find({
            where: {
                announceId: request.params.id,
                buyerOk: true,
                sellerOk: true
            },
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/transaction', function (request, response) {
        var body = request.body;
        Announce.findById(body.announceId).then(function (announce) {
            if (announce.authorId == body.accepterId) {
                response.send({ah: 'AH !', error: "Impossible d'accepter votre propre annonce !"});
                return;
            }
            if (announce.sale) {
                body.sellerId = announce.authorId;
                // Temp
                body.buyerId = body.accepterId;

                body.buyerOk = true;
                body.sellerOk = false;
            } else {
                body.buyerId = announce.authorId;
                //Temp
                body.sellerId = body.accepterId;

                body.sellerOk = true;
                body.buyerOk = false;
            }
            body.status = 0;
            Transaction.create(body).then(function (data) {
                response.send(data);
            }, function (data) {
                response.send({ah: 'AH !', error: data});
            });
        });
    });

    // PUT
    server.put('/transaction/:id/accept', function (request, response) {
        // Temp
        var id = request.body.accepterId;

        var body = {};

        Transaction.findById(request.params.id).then(function (transaction) {
            if (transaction.status != 0) {
                response.send({ah: 'AH !', error: "Cette annonce ne peux pas être acceptée !"});
            } else if (transaction.sellerId == id && !transaction.sellerOk) {
                body.sellerOk = true;
            } else if (transaction.buyerId == id && !transaction.buyerOk) {
                body.buyerOk = true;
            } else {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
                return;
            }
            body.status = 1;
            Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                Transaction.update({status: -1}, {
                    where: {
                        id: {$ne: request.params.id},
                        announceId: transaction.announceId
                    }
                }).then(function () {
                    response.send(data);
                });
            }, function (data) {
                response.send({ah: 'AH !', error: data});
            });
        });
    });

    server.put('/transaction/:id/end', function (request, response) {
        var body = {
            status: 2
        };
        Transaction.findById(request.params.id).then(function (transaction) {
            if (transaction.status != 1) {
                response.send({ah: 'AH !', error: "Cette annonce ne peux pas être terminée !"});
            } else if (request.body.accepterId != transaction.buyerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                    response.send(data);
                }, function (data) {
                    response.send({ah: 'AH !', error: data});
                });
            }
        });
    });

    server.put('/transaction/:id/close', function (request, response) {
        var body = {
            status: 3
        };
        Transaction.findById(request.params.id, {
            include: [
                {model: Announce, as: 'announce'},
                {model: User, as: 'seller'},
                {model: User, as: 'buyer'}
            ]
        }).then(function (transaction) {
            if (transaction.status != 2) {
                response.send({ah: 'AH !', error: "Cette annonce ne peux pas être terminée !"});
            } else if (request.body.accepterId != transaction.sellerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                // Pay
                var sellerUpdate = {ahAmount: transaction.seller.ahAmount + transaction.announce.price};
                var buyerUpdate = {ahAmount: transaction.buyer.ahAmount - transaction.announce.price};
                User.update(sellerUpdate, {where: {id: transaction.sellerId}});
                User.update(buyerUpdate, {where: {id: transaction.buyerId}});
                // Update transaction
                Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                    response.send(data);
                }, function (data) {
                    response.send({ah: 'AH !', error: data});
                });
            }
        });
    });

    server.put('/transaction/:id/cancel', function (request, response) {
        // Temp
        var body = {status: -1};
        Transaction.findById(request.params.id).then(function (transaction) {
            if (transaction.status == 3) {
                response.send({ah: 'AH !', error: "Cette annonce ne peux plus être annulée !"});
            } else if (request.body.accepterId != transaction.sellerId && request.body.accepterId != transaction.buyerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                    response.send(data);
                }, function (data) {
                    response.send({ah: 'AH !', error: data});
                });
            }
        });
    });

    // DELETE
    server.delete('/transaction/:id', function (request, response) {
        Transaction.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });


};