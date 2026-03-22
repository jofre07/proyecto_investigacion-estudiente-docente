/*
Modelo: Productos
*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define(
    'Project',
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        titulo: {
            type: DataTypes.STRING(120),
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        linea_investigacion: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        
        estado: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },
    {
        tableName: 'projects',
        timestamps: true
    }
);

module.exports = Project;