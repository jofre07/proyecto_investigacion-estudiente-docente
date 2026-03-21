/*
Despliegue de los modelos en la base de datos
*/

const sequelize = require('../config/database');

const Rol = require('./role.model');
const User = require('./user.model');
const Proyects = require('./projects.model');

Rol.hasMany(User, {
    foreignKey: 'rolId',
    as: 'usuarios'
});

User.belongsTo(Rol, {
    foreignKey: 'rolId',
    as: 'rol'
});


User.hasMany(Proyects, { 
    foreignKey: 'usuarioId',
    as: 'projects'
});
const db = {
    sequelize,
    Rol,
    User,
    Proyects
};

module.exports = db;