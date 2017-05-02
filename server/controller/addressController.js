var Address = require('../model/address');
var User = require('../model/user');
var City = require('../model/city');
var GoogleAPIService = require('../service/googleAPIService');

module.exports = function (server) {

    // GET
    server.get('/addresses', function (request, response) {
        Address.findAll({
            include: [
                {model: User, as: 'owner'},
                {model: City, as: 'city'}
            ]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/address/:id', function (request, response) {
        Address.findById(request.params.id).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/addresses/user/:id', function (request, response) {
        Address.findAll({
            where: {
                ownerId: request.params.id
            }
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/addresses/city/:id', function (request, response) {
        Address.findAll({
            where: {
                cityId: request.params.id
            }
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/address', function (request, response) {
        var body = request.body;
        City.findById(body.cityId).then(function (city) {
            GoogleAPIService.getAddressCoordinates(body.address, city.name, city.postCode).then(function (data) {
                body.coordX = data.coordX;
                body.coordY = data.coordY;
                Address.create(body).then(function (data) {
                    response.send(data);
                }, function (data) {
                    response.send({ah: 'AH !', error: data});
                });
            });
        });
    });

    // PUT
    server.put('/address', function (request, response) {
        Address.update(request.body, {where: {id: request.body.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // DELETE
    server.delete('/address/:id', function (request, response) {
        Address.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });


};