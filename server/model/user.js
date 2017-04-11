var Sequelize = require('sequelize');
var sequelize = require('../orm');

var User = sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        }
    }, {
        freezeTableName: true
    }
);

User.sync({force: true}).then(function () {
    return User.create({
        firstName: 'Jean-Michel',
        lastName: 'Back-End'
    });
});

module.exports = User;