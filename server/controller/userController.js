var User = require('../model/user');
var jwt  = require('jsonwebtoken');

module.exports = function (server) {

    // GET
    server.get('/users', function (request, response) {
        User.findAll().then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/user/current', function (request, response) {
        User.findById(request.decodedToken).then(function (data) {
            console.log(request.decodedToken);
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.get('/user/current/level', function (request, response) {
        response.send({level: request.decodedLevel});
    });

    server.get('/user/:id', function (request, response) {
        User.findById(request.params.id).then(function (data) {
            response.send(data ? data : {});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // POST
    server.post('/user', function (request, response) {
        User.create(request.body).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    server.post('/login', function(req, res) {
        // find the user
        User.findOne({where:{
            email: req.body.email
        }}).then(
            function(user){
                if(!user) //check user
                {
                    res.json({ success: false, message: 'User doesn\'t exist' });
                }
                else if(user.password !== req.body.password) //check pwd
                {
                    res.json({ success: false, message: 'Incorrect Password' });
                }
                else //User + pass ok => go token !
                {
                    // create a token
                    //Set security Level
                    var securityLevel = 'user';
                    if(user.id === 1) //TODO: IMPROVE BUT NOT TODAY
                        securityLevel = 'admin';
                    var token = jwt.sign({user: user.id, level: securityLevel}, server.get('tokenSecret'));
                    res.json({ success: true, token: token });
                }
            },
            function (err) {
                res.json({ success: false, message: 'Error.' }); }

        );
    });


    // PUT
    server.put('/user', function (request, response) {
        User.update(request.body, {where: {id: request.body.id}}).then(function (data) {
            response.send(data);
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

    // DELETE
    server.delete('/user/:id', function (request, response) {
        if(request.decodedLevel == "admin")
        {
            User.destroy({where: {id: request.params.id}}).then(function (data) {
                response.send({status: data});
            }, function (data) {
                response.send({ah: 'AH !', error: data});
            });
        }
        else
        {
            response.status(403).send({
                success: false,
                message: 'Must Be Admin To Do This.'});
        }
    });
};