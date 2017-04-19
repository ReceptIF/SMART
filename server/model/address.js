var Sequelize = require('sequelize');
var sequelize = require('../orm');
;
var City = require('./city');
var User = require('./user');

var Address = sequelize.define('address', {
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
        address: '1 rue de l\'olive',
        complement: 'Batiment Alphonse Brown',
        coordX: '69.69',
        coordY: '69.69'
    });
});

module.exports = Address;