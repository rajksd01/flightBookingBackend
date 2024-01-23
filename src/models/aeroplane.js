"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Aeroplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Flight, {
        foreignKey: "aeroplaneId",
        onDelete: "CASCADE",
      });
      this.hasMany(models.Seat, {
        foreignKey: "aeroplaneId",
        onDelete: "CASCADE",
      });
    }
  }
  Aeroplane.init(
    {
      modelNumber: DataTypes.STRING,
      capacity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Aeroplane",
    }
  );
  return Aeroplane;
};
