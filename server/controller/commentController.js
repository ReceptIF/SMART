var Comment = require('../model/comment');
var User = require('../model/user');
var Announce = require('../model/announce');

module.exports = function (server) {

    // GET
    server.get('/comments', function (request, response) {
        Comment.findAll({
            include: [
                {model: User, as: 'author'},
                {model: User, as: 'target'},
                {model: Announce, as: 'announce'}
            ]
        }).then(function (data) {
            data.forEach(function (comment) {
                if (comment.dataValues.announce && comment.dataValues.author) {
                    comment.dataValues.authorIsBuyer = (comment.dataValues.announce.sale && comment.dataValues.author.id !== comment.dataValues.announce.authorId)
                        || (!comment.dataValues.announce.sale && comment.dataValues.author.id === comment.dataValues.announce.authorId);
                }
            });
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/comment/:id', function (request, response) {
        Comment.findById(request.params.id, {
            include: [
                {model: User, as: 'author'},
                {model: User, as: 'target'},
                {model: Announce, as: 'announce'}
                ]
        }).then(function (comment) {
            if (comment.dataValues.announce && comment.dataValues.author) {
                comment.dataValues.authorIsBuyer = (comment.dataValues.announce.sale && comment.dataValues.author.id !== comment.dataValues.announce.authorId)
                    || (!comment.dataValues.announce.sale && comment.dataValues.author.id === comment.dataValues.announce.authorId);
            }
            response.send(comment ? comment : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/comments/target/:id', function (request, response) {
        Comment.findAll({
            where: {
                targetId: request.params.id
            },
            include: [{model: User, as: 'author'}, {model: User, as: 'target'}, {model: Announce, as: 'announce'}]
        }).then(function (data) {
            data.forEach(function (comment) {
                if (comment.dataValues.announce && comment.dataValues.author) {
                    comment.dataValues.authorIsBuyer = (comment.dataValues.announce.sale && comment.dataValues.author.id !== comment.dataValues.announce.authorId)
                        || (!comment.dataValues.announce.sale && comment.dataValues.author.id === comment.dataValues.announce.authorId);
                }
            });
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
            include: [{model: User, as: 'author'}, {model: User, as: 'target'}, {model: Announce, as: 'announce'}]
        }).then(function (data) {
            data.forEach(function (comment) {
                if (comment.dataValues.announce && comment.dataValues.author) {
                    comment.dataValues.authorIsBuyer = (comment.dataValues.announce.sale && comment.dataValues.author.id !== comment.dataValues.announce.authorId)
                        || (!comment.dataValues.announce.sale && comment.dataValues.author.id === comment.dataValues.announce.authorId);
                }
            });
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