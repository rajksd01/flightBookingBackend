"use strict";
const { Model, BelongsTo } = require("sequelize");
const { Enums } = require("../utils/common");
const { BUSINESS, PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS } = Enums.SEATS_TYPE;
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
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
    }
  }
  Seat.init(
    {
      aeroplaneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      row: { type: DataTypes.INTEGER, allowNull: false },
      col: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: [PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS, BUSINESS],
        defaultValue: ECONOMY,
      },
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
