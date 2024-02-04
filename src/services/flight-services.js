const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { FlightRepository } = require("../repository");
const AppError = require("../utils/errors/app-errors");
const flightRepository = new FlightRepository();

// creating a new flight

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    console.log(error);
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
    throw new AppError(
      "Cannot create flight",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

// fetching all flights
async function getAllFlight(query) {
  const customFilter = {};
  let sortFilter = [];
  const endingTripTime = " 23:50:00";

  if (query.trips) {
    const [departureAirportId, arrivalAirportId] = query.trips.split("-");
    customFilter.departureAirportId = departureAirportId;
    customFilter.arrivalAirportId = arrivalAirportId;
    // Todo to check whether the arrival and departure airports are different
  }
  if (query.price) {
    [minPrice, maxPrice] = query.price.split("-");
    customFilter.price = {
      [Op.between]: [minPrice, maxPrice == undefined ? 500000 : maxPrice],
    };
  }
  if (query.travellers) {
    customFilter.totalSeats = {
      [Op.gte]: query.travellers,
    };
  }
  if (query.tripDate) {
    customFilter.departureTime = {
      [Op.between]: [query.tripDate, query.tripDate + endingTripTime],
    };
  }
  if (query.sort) {
    const params = query.sort.split(",");

    const sortFilters = params.map((param) => param.split("_"));

    sortFilter = sortFilters;
  }

  try {
    const flights = await flightRepository.getAllFlights(
      customFilter,
      sortFilter
    );
    return flights;
  } catch (error) {
    console.log(error);
    throw new AppError(
      "Cannot fetch data of all the flights",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getFlight(id) {
  try {
    const flight = await flightRepository.get(id);

    flight.statusCode = StatusCodes.OK;
    return flight;
  } catch (error) {
    throw new AppError(
      `Cannot find flight with the given ${id}`,

      StatusCodes.NOT_FOUND
    );
  }
}

module.exports = {
  createFlight,
  getAllFlight,
  getFlight
};
