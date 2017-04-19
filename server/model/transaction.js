var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
Announce = require('./announce');

var Transaction = sequelize.define('transaction', {
        transactionDate: {
            type: Sequelize.DATE,
            field: 'transactionDate',
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            field: 'email',
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            field: 'phone_number',
            allowNull: false
        },
        commentary: {
            type: Sequelize.TEXT,
            field: 'commentary',
            allowNull: false
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
Transaction.belongsTo(User, {as: 'seller',foreignKey: 'sellerId'});
User.hasMany(Transaction, {as: 'buyerId_fk', foreignKey: 'buyerId'});
Transaction.belongsTo(User, {as: 'buyer', foreignKey: 'buyerId'});
Announce.hasMany(Transaction, {as: 'announceId_fk', foreignKey: 'announceId'});
Transaction.belongsTo(Announce, {as: 'announce', foreignKey: 'announceId'});

Transaction.sync().then(function () {
    return Transaction.create({
        transactionDate: '05-05-2015 15:12',
        name: 'Jean-Michel Transaction',
        email: 'Jm@Forever.com',
        phoneNumber: '0607080907',
        commentary: 'Ceci est un Jean-Michel Commentaire !',
        sellerOk: false,
        buyerOk: true,
        status: 1
    });
});

module.exports = Transaction;