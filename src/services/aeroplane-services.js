const { StatusCodes } = require("http-status-codes");
const { AeroplaneRepository } = require("../repository");
const AppError = require("../utils/errors/app-errors");
const aeroplaneRepository = new AeroplaneRepository();

async function createAeroplane(data) {
  try {
    const aeroplane = await aeroplaneRepository.create(data);
    return aeroplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));
      console.log(explanation);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create an aeroplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

function deleteAeroplane(data) {
  try {
    const aeroplane = aeroplaneRepository.destroy(data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}

function getAeroplane(data) {
  try {
    const aeroplane = aeroplaneRepository.findByPk(data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
function getAllAeroplane() {
  try {
    const aeroplane = aeroplaneRepository.findAll();
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
function updateAeroplane(id, data) {
  try {
    const aeroplane = aeroplaneRepository.update(id, data);
    return aeroplane;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createAeroplane,
  deleteAeroplane,
  getAeroplane,
  getAllAeroplane,
  updateAeroplane,
};
