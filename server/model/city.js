var Sequelize = require('sequelize');
var sequelize = require('../orm');

var City = sequelize.define('city', {
        name: {
            type: Sequelize.STRING,
            field: 'name',
            allowNull: false,
            unique: true
        },
        postCode: {
            type: Sequelize.STRING,
            field: 'postCode',
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
);

City.sync().then(function () {
    return City.create({
        name: 'Jean-Michel Villeurbanne',
        postCode: 69100
    });
});

module.exports = City;