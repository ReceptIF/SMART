var Transaction = require('../model/transaction');
var Announce = require('../model/announce');

module.exports = function (server) {

    // GET
    server.get('/transactions', function (request, response) {
        Transaction.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/transaction/:id', function (request, response) {
        Transaction.findById(request.params.id).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/transaction', function (request, response) {
        var body = request.body;
        Announce.findById(body.announceId).then(function (announce) {
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
            body.transactionDate = (new Date()).getTime();
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
            if (transaction.sellerId == id) {
                body.sellerOk = true;
            } else {
                body.buyerOk = true;
            }
            body.status = 1;
            Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                response.send(data);
            }, function (data) {
                response.send({ah: 'AH !', error: data});
            });
        });
    });

    server.put('/transaction/:id/end', function (request, response) {
        var body = {
            status: 2,
            code: Math.floor(Math.random() * 100000)
        };
        Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.put('/transaction/:id/close', function (request, response) {
        var body = {
            status: 3
        };

        Transaction.findById(request.params.id).then(function (transaction) {
            if (request.body.code == transaction.code) {
                Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
                    response.send(data);
                }, function (data) {
                    response.send({ah: 'AH !', error: data});
                });
            } else {
                response.send({ah: 'AH !', error: 'Code erronné !'});
            }
        });
    });

    server.put('/transaction/:id/cancel', function (request, response) {
        // Temp
        var body = {status: -1};
        Transaction.update(body, {where: {id: request.params.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
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