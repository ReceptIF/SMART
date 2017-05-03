var Transaction = require('../model/transaction');
var Announce = require('../model/announce');
var User = require('../model/user');
var Comment = require('../model/comment');
var Notification = require('../model/notification');

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

    server.get('/transactions/user/:id/announce/:announceId', function (request, response) {
        Transaction.find({
            where: {
                $or: [{sellerId: request.params.id}, {buyerId: request.params.id}],
                announceId: request.params.announceId
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
            if (announce.authorId == request.decodedToken) {
                response.send({ah: 'AH !', error: "Impossible d'accepter votre propre annonce !"});
                return;
            }
            if (announce.sale) {
                body.sellerId = announce.authorId;
                // Temp
                body.buyerId = request.decodedToken;

                body.buyerOk = true;
                body.sellerOk = false;
            } else {
                body.buyerId = announce.authorId;
                //Temp
                body.sellerId = request.decodedToken;

                body.sellerOk = true;
                body.buyerOk = false;
            }
            body.status = 0;
            Transaction.create(body).then(function (data) {
                Notification.create({
                    transactionId: data.id,
                    type: 'answer',
                    userId: announce.authorId,
                    icon: 'chatbubbles',
                    read: false
                });
                response.send(data);
            }, function (data) {
                response.send({ah: 'AH !', error: data});
            });
        });
    });

    // PUT
    server.put('/transaction/:id/accept', function (request, response) {
        // Temp
        var id = request.decodedToken;

        var body = {};

        Transaction.findById(request.params.id, {
            include: {
                model: Announce,
                as: 'announce'
            }
        }).then(function (transaction) {
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
                Notification.create(
                    {
                        transactionId: transaction.id,
                        type: 'accept',
                        userId: transaction.sellerId == transaction.announce.authorId ? transaction.buyerId : transaction.sellerId,
                        icon: 'chatbubbles',
                        read: false
                    }
                );
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
            } else if (request.decodedToken != transaction.sellerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                Notification.create(
                    {
                        transactionId: transaction.id,
                        type: 'end',
                        userId: transaction.buyerId,
                        icon: 'chatbubbles',
                        read: false
                    }
                );
                if (request.body.comment) {
                    Comment.create({
                        title: request.body.comment.title,
                        content: request.body.comment.content,
                        note: request.body.comment.note,
                        announceId: transaction.announceId,
                        authorId: transaction.sellerId,
                        targetId: transaction.buyerId
                    });
                }
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
            } else if (request.decodedToken != transaction.buyerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                // Pay
                var sellerUpdate = {ahAmount: transaction.seller.ahAmount + transaction.announce.price};
                var buyerUpdate = {ahAmount: transaction.buyer.ahAmount - transaction.announce.price};
                User.update(sellerUpdate, {where: {id: transaction.sellerId}});
                User.update(buyerUpdate, {where: {id: transaction.buyerId}});
                Announce.update({closed: true}, {where: {id: transaction.announceId}});
                // Update transaction
                Notification.create(
                    {
                        transactionId: transaction.id,
                        type: 'close',
                        userId: transaction.sellerId,
                        icon: 'chatbubbles',
                        read: false
                    }
                );
                if (request.body.comment) {
                    Comment.create({
                        title: request.body.comment.title,
                        content: request.body.comment.content,
                        note: request.body.comment.note,
                        announceId: transaction.announceId,
                        authorId: transaction.buyerId,
                        targetId: transaction.sellerId
                    });
                }
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
            } else if (request.decodedToken != transaction.sellerId && request.decodedToken != transaction.buyerId) {
                response.send({ah: 'AH !', error: "Cette annonce ne vous appartient pas !"});
            } else {
                Notification.create(
                    {
                        transactionId: transaction.id,
                        type: 'cancel',
                        userId: transaction.buyerId,
                        icon: 'chatbubbles',
                        read: false
                    }
                );
                Notification.create(
                    {
                        transactionId: transaction.id,
                        type: 'cancel',
                        userId: transaction.sellerId,
                        icon: 'chatbubbles',
                        read: false
                    }
                );
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