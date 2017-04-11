var Sequelize = require('sequelize');
var sequelize = require('../orm');

var User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            field: 'email'
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'first_name'
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'last_name'
        },
        cellPhone: {
            type: Sequelize.STRING(10),
            field: 'cell_phone'
        },
        address: {
            type: Sequelize.STRING,
            field: 'address'
        },
        ahAmount: {
            type: Sequelize.INTEGER,
            field: 'ah_amount'
        },
        password: {
            type: Sequelize.STRING,
            field: 'password'
        },
        coordX: {
            type: Sequelize.FLOAT,
            field: 'coord_x'
        },
        coordY: {
            type: Sequelize.FLOAT,
            field: 'coord_y'
        }
    }, {
        freezeTableName: true
    }
);

User.sync({force: true}).then(function () {
    return User.create({
        email: 'jm.be@smart.pld',
        firstName: 'Jean-Michel',
        lastName: 'Back-End',
        cellPhone: '0606060606',
        address: '69 Avenue Jean-Michel Grand Lyon',
        ahAmount: 50000,
        password: 'mdr',
        coordX: 69.69,
        coordY: 69.69
    });
});

module.exports = User;