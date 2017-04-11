var Comment = require('../model/comment');

module.exports = function (server) {

    server.get('/comments', function (request, response) {
        Comment.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};