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

    server.post('/user/login', function(req, res) {

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
                    var token = jwt.sign({user: user}, server.get('tokenSecret'));
                    res.json({ success: true, token: token });
                }
            },
            function (err) {
                res.json({ success: false, message: 'Error.' }); }

        );
        /*, function(err, user) {
            //if (err) throw err;
            if (!user) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else if (user) {
                // check if password matches
                if (user.password != req.body.password) {
                    res.json({ success: false, message: 'Authentication failed. Wrong password.' });
                } else {
                    // if user is found and password is right
                    // create a token
                    var token = jwt.sign(user, app.get('superSecret'), {
                        expiresInMinutes: 1440 // expires in 24 hours
                    });
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        message: 'Enjoy your token!',
                        token: token
                    });
                }
            }
        }); */
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
        User.destroy({where: {id: request.params.id}}).then(function (data) {
            response.send({status: data});
        }, function (data) {
            response.send({ah: 'AH !', error: data});
        });
    });

};