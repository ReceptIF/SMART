var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');

var Comment = sequelize.define('comment', {
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
            field: 'note'
        }
    }, {
        freezeTableName: true
    }
);

User.hasOne(Comment, {as: 'authorId_fk', foreignKey : 'authorId'});
User.hasOne(Comment, {as: 'targetId_fk', foreignKey : 'targetId'});

Comment.sync({force: true}).then(function () {
    return Comment.create({
        title:'Ah! Titre',
        content:'Ah! Very Interesting!',
        note:5
    });
});

module.exports = Comment;