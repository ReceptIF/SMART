var Sequelize = require('sequelize');
var sequelize = require('../orm');
User = require('./user');
Announce = require('./announce');

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

Announce.hasMany(Comment, {as: 'announceId_fk', foreignKey : 'announceId'});
Comment.belongsTo(Announce, {as: 'announce', foreignKey : 'announceId'});

User.hasMany(Comment, {as: 'targetId_fk', foreignKey : 'targetId'});
Comment.belongsTo(User, {as: 'target', foreignKey : 'targetId'});

Comment.sync();

module.exports = Comment;