"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Aeroplane, {
        foreignKey: "aeroplaneId",
      });

      this.belongsTo(models.Airport, {
        as: "departureAirport",
        foreignKey: "departureAirportId",
      });
      this.belongsTo(models.Airport, {
        as: "arrivalAirport",
        foreignKey: "arrivalAirportId",
      });
    }
  }
  Flight.init(
    {
      flightNumber: { type: DataTypes.STRING, allowNull: false },
      aeroplaneId: { type: DataTypes.INTEGER, allowNull: false },
      departureAirportId: { type: DataTypes.STRING, allowNull: false },
      arrivalAirportId: { type: DataTypes.STRING, allowNull: false },
      arrivalTime: { type: DataTypes.DATE, allowNull: false },
      departureTime: { type: DataTypes.DATE, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      boardingGate: { type: DataTypes.STRING },
      totalSeats: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
