const AppError = require("../utils/errors/app-errors");
const { AirportRepository } = require("../repository");
const { StatusCodes } = require("http-status-codes");
const airportRepository = new AirportRepository();

// create a new airport
async function createAirport(data) {
  try {
    const airport = await airportRepository.create(data);

    return airport;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    console.log(error);
    throw new AppError(
      "Cannot create an airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    return await airportRepository.destroy(id);
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("airport doesnot exist", error.statusCode);
    }
    throw new AppError(
      "Cannot delete an airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirport(data) {
  try {
    const airport = await airportRepository.get(data);

    airport.statusCode = StatusCodes.OK;
    return airport;
  } catch (error) {
    throw new AppError(
      `Cannot find airport with the given ${data}`,

      StatusCodes.NOT_FOUND
    );
  }
}
async function getAllAirport() {
  try {
    const airports = await airportRepository.getAll();
    return airports;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the airports",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// update an airport data
async function updateAirport(id, data) {
  try {
    const airport = await airportRepository.update(id, data);

    return airport;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "airport wasnot found, provide valid details",
        error.statusCode
      );
    }

    throw new AppError("Update Failed", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

// exporting modules
module.exports = {
  createAirport,
  deleteAirport,
  getAirport,
  getAllAirport,
  updateAirport,
};
