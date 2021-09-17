const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Coffee extends Model {}

Coffee.init(
{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
},
{
    sequelize,
    timestamps: false,
}
);

module.exports = { Coffee };
