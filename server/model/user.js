var Sequelize = require('sequelize');
var sequelize = require('../orm');

var User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            field: 'email',
            allowNull: false,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'firstName',
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'lastName',
            allowNull: false
        },
        cellPhone: {
            type: Sequelize.STRING(10),
            field: 'cellPhone',
            allowNull: false
        },
        ahAmount: {
            type: Sequelize.INTEGER,
            field: 'ahAmount',
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            field: 'password',
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
);

User.sync().then(function () {
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