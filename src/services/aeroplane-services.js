const { StatusCodes } = require("http-status-codes");
const { AeroplaneRepository } = require("../repository");
const AppError = require("../utils/errors/app-errors");
const aeroplaneRepository = new AeroplaneRepository();

// create a new aeroplane
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

async function deleteAeroplane(id) {
  try {
    return await aeroplaneRepository.destroy(id);
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("Aeroplane doesnot exist", error.statusCode);
    }
    throw new AppError(
      "Cannot delete an aeroplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAeroplane(data) {
  try {
    const aeroplane = await aeroplaneRepository.get(data);

    aeroplane.statusCode = StatusCodes.OK;
    return aeroplane;
  } catch (error) {
    throw new AppError(
      `Cannot find aeroplane with the given ${data}`,

      StatusCodes.NOT_FOUND
    );
  }
}
function getAllAeroplane() {
  try {
    const aeroplanes = aeroplaneRepository.getAll();
    return aeroplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the aeroplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// update an aeroplane data
async function updateAeroplane(id, data) {
  try {
    const aeroplane = await aeroplaneRepository.update(id, data);

    return aeroplane;
  } catch (error) {
    
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "Aeroplane wasnot found, provide valid details",
        error.statusCode
      );
    }

    throw new AppError("Update Failed", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

// exporting modules
module.exports = {
  createAeroplane,
  deleteAeroplane,
  getAeroplane,
  getAllAeroplane,
  updateAeroplane,
};
