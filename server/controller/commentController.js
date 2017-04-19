var Comment = require('../model/comment');
var User = require('../model/user');

module.exports = function (server) {

    // GET
    server.get('/comments', function (request, response) {
        Comment.findAll({include: [User]}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/comment/:id', function (request, response) {
        Comment.findById(request.params.id, {include: [User]}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/comments/target/:id', function (request, response) {
        Comment.findAll({
            where: {
                targetId: request.params.id
            },
            include: [User]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/comments/author/:id', function (request, response) {
        Comment.findAll({
            where: {
                authorId: request.params.id
            },
            include: [User]
        }).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/comment', function (request, response) {
        Comment.create(request.body).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // PUT
    server.put('/comment', function (request, response) {
        Comment.update(request.body, {where: {id: request.body.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // DELETE
    server.delete('/comment/:id', function (request, response) {
        Comment.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });


};