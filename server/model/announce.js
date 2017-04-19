var Sequelize = require('sequelize');
var sequelize = require('../orm');
var User = require('./user');
var AnnounceType = require('./announceType');
var Address = require('./address');

var Announce = sequelize.define('announce', {
        price: {
            type: Sequelize.INTEGER,
            field: 'price',
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            field: 'description',
            allowNull: false
        },
        estimatedTime: {
            type: Sequelize.INTEGER,
            field: 'estimatedTime'
        },
        startTime: {
            type: Sequelize.DATE,
            field: 'startTime'
        },
        endTime: {
            type: Sequelize.DATE,
            field: 'endTime'
        },
        coordX: {
            type: Sequelize.FLOAT,
            field: 'coordX'
        },
        coordY: {
            type: Sequelize.FLOAT,
            field: 'coordY'
        },
        sale: {
            type: Sequelize.BOOLEAN,
            field: 'sale',
            allowNull: false
        },
        closed: {
            type: Sequelize.BOOLEAN,
            field: 'closed',
            allowNull: false

        }
    }, {
        freezeTableName: true
    }
);

User.hasMany(Announce, {as: 'authorId_fk', foreignKey: 'authorId'});
Announce.belongsTo(User, {as: 'author', foreignKey: 'authorId'});
AnnounceType.hasMany(Announce, {as: 'typeId_fk', foreignKey: 'typeId'});
Announce.belongsTo(AnnounceType, {as: 'type', foreignKey: 'typeId'});
Address.hasMany(Announce, {as: 'addressId_fk', foreignKey: 'addressId'});
Announce.belongsTo(Address, {as: 'address', foreignKey: 'addressId'});

Address.hasMany(Announce, {as: 'addressId_fk', foreignKey: 'addressId'});
/*
Announce.belongsTo(Address, {foreignKey: 'addressId'});
*/

Announce.sync().then(function () {
    return Announce.create({
        price: 500,
        title: 'Aide Plomberie',
        description: 'J\'ai un problème de tuyaux',
        estimatedTime: 30,
        startTime: new Date(2017, 6, 20),
        endTime: new Date(2017, 6, 25),
        address: 'Rue Einstein, Villeurbanne',
        coordX: 45.782530,
        coordY: 4.878155,
        sale: true,
        closed: false
    });
});

module.exports = Announce;