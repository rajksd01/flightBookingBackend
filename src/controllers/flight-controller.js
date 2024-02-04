const { StatusCodes } = require("http-status-codes");

const { FlightServices } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createFlight(req, res) {
  try {
    const flight = await FlightServices.createFlight({
      flightNumber: req.body.flightNumber,
      aeroplaneId: req.body.aeroplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
      boardingGate: req.body.boardingGate,
      totalSeats: req.body.totalSeats,
    });
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllFlight(req, res) {
  try {
    const flights = await FlightServices.getAllFlight(req.query);
    SuccessResponse.data = flights;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;

    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getFlight(req, res) {
  try {
    const id = req.params.id;
    const flight = await FlightServices.getFlight(id);
    SuccessResponse.data = flight;
    return res.status(flight.statusCode).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
module.exports = {
  createFlight,
  getAllFlight,
  getFlight,
};
