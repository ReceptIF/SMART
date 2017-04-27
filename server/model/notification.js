var Sequelize = require('sequelize');
var sequelize = require('../orm');
var Announce = require('./announce');
var User = require('./user');

var Notification = sequelize.define('notification', {
        name: {
            type: Sequelize.STRING,
            field: 'icon'
        },
        code: {
            type: Sequelize.STRING,
            field: 'type'
        },
        postCode: {
            type: Sequelize.BOOLEAN,
            field: 'read'
        }
    }, {
        freezeTableName: true
    }
);

Announce.hasMany(Notification, {as: 'announceId_fk', foreignKey: 'announceId'});
Notification.belongsTo(Announce, {as: 'announce', foreignKey: 'announceId'});
User.hasMany(Notification, {as: 'userId_fk', foreignKey: 'userId'});
Notification.belongsTo(User, {as: 'user', foreignKey: 'userId'});

Notification.sync();

module.exports = Notification;