var Sequelize = require('sequelize');
var sequelize = require('../orm');
City = require('./city');

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
        address: {
            type: Sequelize.STRING,
            field: 'address',
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
        },
        coordX: {
            type: Sequelize.FLOAT,
            field: 'coordX'
        },
        coordY: {
            type: Sequelize.FLOAT,
            field: 'coordY'
        }
    }, {
        freezeTableName: true
    }
);
City.hasMany(User, {as: 'cityId_fk', foreignKey: 'cityId'});
User.belongsTo(City, {foreignKey: 'cityId'});

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