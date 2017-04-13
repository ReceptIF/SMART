var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
Announce = require('./announce');

var Transaction = sequelize.define('transaction', {
        transactionDate: {
            type: Sequelize.DATE,
            field: 'transactionDate'
        },
        sellerOk: {
            type: Sequelize.BOOLEAN,
            field: 'sellerOk'
        },
        buyerOk: {
            type: Sequelize.BOOLEAN,
            field: 'buyerOk'
        },
        code: {
            type: Sequelize.INTEGER,
            field: 'code'
        },
        status: {
            type: Sequelize.INTEGER,
            field: 'status',
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
);

User.hasMany(Transaction, {as: 'sellerId_fk', foreignKey: 'sellerId'});
Transaction.belongsTo(User, {foreignKey: 'sellerId'});
User.hasMany(Transaction, {as: 'buyerId_fk', foreignKey: 'buyerId'});
Transaction.belongsTo(User, {foreignKey: 'buyerId'});
Announce.hasOne(Transaction, {as: 'announceId_fk', foreignKey: 'announceId'});
Transaction.belongsTo(Announce, {foreignKey: 'announceId'});

Transaction.sync().then(function () {
    return Transaction.create({
        transactionDate: '05-05-2015 15:12',
        sellerOk: false,
        buyerOk: true,
        status: 1
    });
});

module.exports = Transaction;