var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
City = require('./city');

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
        }
    }, {
        freezeTableName: true
    }
);

User.hasOne(Address, {as: 'userId_fk', foreignKey : 'userId'});
City.hasOne(Address, {as: 'cityId_fk', foreignKey : 'cityId'});

Address.sync().then(function () {
    return Address.create({
        address:'1 rue de l\'olive',
        complement:'Batiment Alphonse Brown'
    });
});

module.exports = Address;