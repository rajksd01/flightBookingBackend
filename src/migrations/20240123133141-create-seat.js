"use strict";
/** @type {import('sequelize-cli').Migration} */

const { Enums } = require("../utils/common");
const { BUSINESS, PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS } = Enums.SEATS_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Seats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      aeroplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Aeroplanes",
          key: "id",
        },
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      col: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: [PREMIUM_ECONOMY, ECONOMY, FIRST_CLASS, BUSINESS],
        defaultValue: ECONOMY,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Seats");
  },
};
