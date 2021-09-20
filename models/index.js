const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Sauce extends Model {}

Sauce.init({
    studentId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    campus: DataTypes.STRING
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Sauce};