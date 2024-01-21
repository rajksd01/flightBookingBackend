const AirportRepository = require("../repository/airport-repository");

// create a new airport
async function createAirport(data) {
  try {
    const airport = await AirportRepository.create(data);
    return airport;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.forEach((err) => explanation.push(err.message));

      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create an airport object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteAirport(id) {
  try {
    return await AirportRepository.destroy(id);
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
    const airport = await AirportRepository.get(data);

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
    const airports = await AirportRepository.getAll();
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
    const airport = await AirportRepository.update(id, data);

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
