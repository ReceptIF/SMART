var Sequelize = require('sequelize');
var sequelize = require('../orm');
var Transaction = require('./transaction');
var Comment = require('./comment');
var User = require('./user');

var Notification = sequelize.define('notification', {
        icon: {
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

Transaction.hasMany(Notification, {as: 'transactionId_fk', foreignKey: 'transactionId'});
Notification.belongsTo(Transaction, {as: 'transaction', foreignKey: 'transactionId'});

Comment.hasMany(Notification, {as: 'commentId_fk', foreignKey: 'commentId'});
Notification.belongsTo(Comment, {as: 'comment', foreignKey: 'commentId'});

User.hasMany(Notification, {as: 'userId_fk', foreignKey: 'userId'});
Notification.belongsTo(User, {as: 'user', foreignKey: 'userId'});

Notification.sync();

module.exports = Notification;