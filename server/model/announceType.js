var Sequelize = require('sequelize');
var sequelize = require('../orm');

var AnnounceType = sequelize.define('announce_type', {
        name: {
            type: Sequelize.STRING,
            field: 'name'
        },
        icon: {
            type: Sequelize.STRING,
            field: 'icon'
        }
    }, {
        freezeTableName: true
    }
);

AnnounceType.sync().then(function () {
    return AnnounceType.create({
        name: 'Plomberie',
        icon: 'pipe'
    });
});

module.exports = AnnounceType;