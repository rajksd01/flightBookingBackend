const { StatusCodes } = require("http-status-codes");
const { CityRepository } = require("../repository");
const AppError = require("../utils/errors/app-errors");
const cityRepository = new CityRepository();

// creating a city
async function createCity(data) {
  try {
    const city = await cityRepository.create(data);

    return city;
  } catch (error) {
    if (
      error.name == "SequelizeValidationError" ||
      "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError("Cannot create city", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteCity(id) {
  try {
    return await cityRepository.destroy(id);
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("City doesnot exist", error.statusCode);
    }
    throw new AppError(
      "Cannot delete an city object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCity(data) {
  try {
    const city = await cityRepository.get(data);

    city.statusCode = StatusCodes.OK;
    return city;
  } catch (error) {
    throw new AppError(
      `Cannot find city with the given ${data}`,

      StatusCodes.NOT_FOUND
    );
  }
}
function getAllCities() {
  try {
    const cities = cityRepository.getAll();
    return cities;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the city",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// update an city data
async function updateCity(id, data) {
  try {
    const city = await cityRepository.update(id, data);

    return city;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        "City wasnot found, provide valid details",
        error.statusCode
      );
    }
    if (error.name == "SequelizeUniqueConstraintError") {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    throw new AppError("Update Failed", StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createCity,
  deleteCity,
  getCity,
  getAllCities,
  updateCity,
};
