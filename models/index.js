const {Sequelize, DataTypes, Model} = require('sequelize')
const {sequelize} = require('../db')


class Plant extends Model {}

Plant.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
}, {
    sequelize,
    timestamps: false,
});

module.exports = {Plant};