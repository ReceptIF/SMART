var Sequelize = require('sequelize');
var sequelize = require('../orm');

var Transaction = sequelize.define('Transaction', {
        transactionDate: {
            type: Sequelize.DATE,
            field: 'transaction_date'
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
            field: 'status'
        }
    }, {
        freezeTableName: true
    }
);

Transaction.sync({force: true}).then(function () {
    return Transaction.create({
        transactionDate:'05-05-2015 15:12',
        sellerOk:false,
        buyerOk:true,
        code:69425,
        status:1
    });
});

module.exports = Transaction;