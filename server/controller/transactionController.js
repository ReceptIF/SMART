var Transaction = require('../model/transaction');

module.exports = function (server) {

    server.get('/transactions', function (request, response) {
        Transaction.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};