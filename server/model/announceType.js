var Sequelize = require('sequelize');
var sequelize = require('../orm');

var AnnounceType = sequelize.define('announce_type', {
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
        },
        icon: {
            type: Sequelize.STRING,
            field: 'icon'
        }
    }, {
        freezeTableName: true
    }
);

AnnounceType.sync();

module.exports = AnnounceType;