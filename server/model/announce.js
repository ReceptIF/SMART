var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
AnnounceType = require('./announceType');

var Announce = sequelize.define('announce', {
        price: {
            type: Sequelize.INTEGER,
            field: 'price'
        },
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        description: {
            type: Sequelize.STRING,
            field: 'description'
        },
        estimatedTime: {
            type: Sequelize.INTEGER,
            field: 'estimated_time'
        },
        startTime: {
            type: Sequelize.DATE,
            field: 'start_time'
        },
        endTime: {
            type: Sequelize.DATE,
            field: 'end_time'
        },
        address: {
            type: Sequelize.STRING,
            field: 'address'
        },
        coordX: {
            type: Sequelize.FLOAT,
            field: 'coord_x'
        },
        coordY: {
            type: Sequelize.FLOAT,
            field: 'coord_y'
        },
        sale: {
            type: Sequelize.BOOLEAN,
            field: 'sale'
        }
    }, {
        freezeTableName: true
    }
);

User.hasOne(Announce, {as: 'authorId_fk', foreignKey : 'authorId'});
AnnounceType.hasOne(Announce, {as: 'typeId_fk', foreignKey: 'typeId'});

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
        sale: true
    });
});

module.exports = Announce;