var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');

var Comment = sequelize.define('comment', {
        title: {
            type: Sequelize.STRING,
            field: 'title',
            allowNull: false
        },
        content: {
            type: Sequelize.TEXT,
            field: 'content',
            allowNull: false
        },
        note: {
            type: Sequelize.INTEGER,
            field: 'note',
            allowNull: false
        }
    }, {
        freezeTableName: true
    }
);

User.hasMany(Comment, {as: 'authorId_fk', foreignKey : 'authorId'});
Comment.belongsTo(User, {as: 'author', foreignKey : 'authorId'});
User.hasMany(Comment, {as: 'targetId_fk', foreignKey : 'targetId'});
Comment.belongsTo(User, {as: 'target', foreignKey : 'targetId'});

Comment.sync().then(function () {
    return Comment.create({
        title:'Ah! Titre',
        content:'Ah! Very Interesting!',
        note:5
    });
});

module.exports = Comment;