var Sequelize = require('sequelize');
var sequelize = require('../orm');

var Comment = sequelize.define('user', {
        title: {
            type: Sequelize.STRING,
            field: 'title'
        },
        content: {
            type: Sequelize.STRING,
            field: 'content'
        },
        note: {
            type: Sequelize.INTEGER,
            field: 'content'
        }
    }, {
        freezeTableName: true
    }
);

Comment.sync({force: true}).then(function () {
    return Comment.create({
        title:'Ah! Titre',
        content:'Ah! Very Interesting!',
        note:5
    });
});

module.exports = Comment;