const { AirportServices } = require("../services");

const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

// create a new airport

async function createAirport(req, res) {
  try {
    const airport = await AirportServices.createAirport({
      name: req.body.name,
      code: req.body.code,
      address: req.body.address,
      cityId: req.body.cityId,
    });

    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    console.log(" creating airport er ");
    console.log(error);
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// delete a airport

async function deleteAirport(req, res) {
  try {
    await AirportServices.deleteAirport(req.params.id);
    SuccessResponse.data = `airport with id ${req.params.id} was deleted`;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// fetch all airports
async function getAllAirport(req, res) {
  try {
    const airports = await AirportServices.getAllAirport();
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// fetch a specific airport from id

async function getAirport(req, res) {
  try {
    const id = req.params.id;
    const airport = await AirportServices.getAirport(id);
    SuccessResponse.data = airport;
    return res.status(airport.statusCode).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
// to update data of a airport
async function updateAirport(req, res) {
  try {
    const id = req.params.id;

    await AirportServices.updateAirport(id, req.body);
    const updatedairport = await AirportServices.getAirport(id);
    SuccessResponse.data = updatedairport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.SERVICE_UNAVAILABLE).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  deleteAirport,
  getAllAirport,
  getAirport,
  updateAirport,
};
