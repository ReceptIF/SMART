var Sequelize = require('sequelize');
var sequelize = require('../orm');

var City = sequelize.define('City', {
        name: {
            type: Sequelize.STRING,
            field: 'type'
        },
        postCode: {
            type: Sequelize.STRING,
            field: 'postcode'
        }
    }, {
        freezeTableName: true
    }
);

City.sync({force: true}).then(function () {
    return City.create({
        name: 'Jean-Michel Villeurbanne',
        postCode: 69100
            });
});

module.exports = City;