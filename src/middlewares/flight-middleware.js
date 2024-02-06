const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");
const { CompareTime } = require("../utils/helpers/datetime-helper");

function validateCreateRequest(req, res, next) {
  if (!req.body.flightNumber) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Flight  Number not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.aeroplaneId) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Aeroplane Id not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureAirportId) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Departure Airport Id Not Found   Number not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalAirportId) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Arrival Airport Id  not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.price) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Price not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.arrivalTime) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Arrival Time not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.departureTime) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Departure Time  not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  if (!req.body.totalSeats) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Total Number of Seats not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!CompareTime(req.body.arrivalTime, req.body.departureTime)) {
    ErrorResponse.message = "Something went wrong while creating a flight ";
    ErrorResponse.error = new AppError([
      "Arrival Time is before Departure Time ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

function validateRemainingSeats(req, res, next) {
  if (!req.body.seats) {
    ErrorResponse.message = "Something went wrong while updating seats ";
    ErrorResponse.error = new AppError([
      "Seats  not found ",
      StatusCodes.BAD_REQUEST,
    ]);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest, validateRemainingSeats };
