/*
Modelo: Productos
*/

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Proyects = sequelize.define(
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
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0.0
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
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

module.exports = Proyects;