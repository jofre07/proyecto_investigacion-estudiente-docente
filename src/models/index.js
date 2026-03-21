/*
Despliegue de los modelos en la base de datos
*/

const sequelize = require('../config/database');

const Rol = require('./role.model');
const User = require('./user.model');
const Project = require('./projects.model');

Rol.hasMany(User, {
    foreignKey: 'rolId',
    as: 'usuarios'
});

User.belongsTo(Rol, {
    foreignKey: 'rolId',
    as: 'rol'
});


User.hasMany(Project, { 
    foreignKey: 'usuarioId',
    as: 'projects'
});

Project.belongsTo( User , {
    foreignKey: 'usuarioId',
    as:'usuarios'
} )

const db = {
    sequelize,
    Rol,
    User,
    Project
};

module.exports = db;