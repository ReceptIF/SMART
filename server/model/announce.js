var Sequelize = require('sequelize');
var sequelize = require('../orm');

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
        address: {
            type: Sequelize.STRING,
            field: 'address'
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
            field: Sequelize.BOOLEAN,
            field: 'sale'
        }
    }, {
        freezeTableName: true
    }
);

Announce.sync({force: true}).then(function () {
    return Announce.create({
        price: 500,
        title: 'Aide Plomberie',
        description: 'J\'ai un problème de tuyaux',
        estimatedTime: 30
        startTime: new Date(2017, 6, 20)
        endTime: new Date(2017, 6, 25)
        address: 'Rue Einstein, Villeurbanne'
        coordX: 45.782530
        coordY: 4.878155
        sale: TRUE
    });
});

module.exports = Announce;