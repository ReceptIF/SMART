var Transaction = require('../model/transaction');

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
        Transaction.create(request.body).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // PUT
    server.put('/transaction', function (request, response) {
        Transaction.update(request.body, {where: {id: request.body.id}}).then(function (data) {
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