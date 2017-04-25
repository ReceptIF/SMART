var Sequelize = require('sequelize');
var sequelize = require('../orm');

var City = require('./city');
var User = require('./user');

var Address = sequelize.define('address', {
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            field: 'address',
            allowNull: false
        },
        complement: {
            type: Sequelize.STRING,
            field: 'complement',
            allowNull: false
        },
        district: {
            type: Sequelize.STRING,
            field: 'district'
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

City.hasMany(Address, {as: 'cityId_fk', foreignKey: 'cityId'});
Address.belongsTo(City, {as: 'city', foreignKey: 'cityId'});
User.hasMany(Address, {as: 'ownerId_fk', foreignKey: 'ownerId'});
Address.belongsTo(User, {as: 'owner', foreignKey: 'ownerId'});

Address.sync().then(function () {
    return Address.create({
        name: 'Maison',
        address: '1 rue de l\'olive',
        complement: 'Batiment Alphonse Brown',
        coordX: '69.69',
        coordY: '69.69'
    });
});

module.exports = Address;