var Sequelize = require('sequelize');
var sequelize = require('../orm');

var User = sequelize.define('user', {
        email: {
            type: Sequelize.STRING,
            field: 'email',
            allowNull: false,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING,
            field: 'firstName',
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            field: 'lastName',
            allowNull: false
        },
        cellPhone: {
            type: Sequelize.STRING(10),
            field: 'cellPhone',
            allowNull: false
        },
        ahAmount: {
            type: Sequelize.INTEGER,
            field: 'ahAmount',
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            field: 'password',
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
);

User.sync().then(function () {
    User.create({
        email: 'jm.server@smart.pld',
        firstName: 'Jean-Michel',
        lastName: 'Server',
        cellPhone: '0606060607',
        address: '68 Avenue Jean-Michel Grand Lyon',
        ahAmount: 54000,
        password: 'lol',
        coordX: 68.68,
        coordY: 68.68
    });
    return User.create({
        email: 'jm.be@smart.pld',
        firstName: 'Jean-Michel',
        lastName: 'Back-End',
        cellPhone: '0606060606',
        address: '69 Avenue Jean-Michel Grand Lyon',
        ahAmount: 50000,
        password: 'mdr',
        coordX: 69.69,
        coordY: 69.69
    });
});

User.findByEmail = function(email, cb) {
    process.nextTick(function() {
        for (var i = 0, len = records.length; i < len; i++) {
            var record = records[i];
            if (record.email === email) {
                return cb(null, record);
            }
        }
        return cb(null, null);
    });
}

module.exports = User;