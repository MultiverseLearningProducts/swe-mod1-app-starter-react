const { Sequelize, DataTypes, Model } = require("sequelize");
const { sequelize } = require("../db");

class Product extends Model {}

Product.init(

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

module.exports = { Product };
