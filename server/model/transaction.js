var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
Announce = require('./announce');

var Transaction = sequelize.define('Transaction', {
        transactionDate: {
            type: Sequelize.DATE,
            field: 'transaction_date'
        },
        sellerOk: {
            type: Sequelize.BOOLEAN,
            field: 'seller_ok'
        },
         buyerOk: {
            type: Sequelize.BOOLEAN,
            field: 'buyer_ok'
        },
         code: {
            type: Sequelize.INTEGER,
            field: 'code'
        },
         status: {
            type: Sequelize.INTEGER,
            field: 'status'
        }
    }, {
        freezeTableName: true
    }
);

User.hasMany(Transaction, {as: 'sellerId_fk', foreignKey : 'sellerId'});
User.hasMany(Transaction, {as: 'buyerId_fk', foreignKey : 'buyerId'});
Announce.hasOne(Transaction, {as: 'announceId_fk', foreignKey: 'announceId'});

Transaction.sync().then(function () {
    return Transaction.create({
        transactionDate:'05-05-2015 15:12',
        sellerOk:false,
        buyerOk:true,
        code:69425,
        status:1
    });
});

module.exports = Transaction;