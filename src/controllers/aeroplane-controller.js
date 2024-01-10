const { StatusCodes } = require("http-status-codes");
const { AeroplaneServices } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

// create a new Aeroplane

async function createAeroplane(req, res) {
  try {
    const aeroplane = await AeroplaneServices.createAeroplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });

    SuccessResponse.data = aeroplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// delete a aeroplane

async function deleteAeroplane(req, res) {
  try {
    await AeroplaneServices.deleteAeroplane(req.params.id);
    SuccessResponse.data = `Aeroplane with id ${req.params.id} was deleted`;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// fetch all aeroplanes
async function getAllAeroplane(req, res) {
  try {
    const aeroplanes = await AeroplaneServices.getAllAeroplane();
    SuccessResponse.data = aeroplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

// fetch a specific aeroplane from id

async function getAeroplane(req, res) {
  try {
    const id = req.params.id;
    const aeroplane = await AeroplaneServices.getAeroplane(id);
    SuccessResponse.data = aeroplane;
    return res.status(aeroplane.statusCode).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}
// to update data of a aeroplane
async function updateAeroplane(req, res) {
  try {
    const id = req.params.id;

    await AeroplaneServices.updateAeroplane(id, req.body);
    const updatedAeroplane = await AeroplaneServices.getAeroplane(id);
    SuccessResponse.data = updatedAeroplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    console.log(error);
    ErrorResponse.error = error;
    return res.status(StatusCodes.SERVICE_UNAVAILABLE).json(ErrorResponse);
  }
}

module.exports = {
  createAeroplane,
  deleteAeroplane,
  getAllAeroplane,
  getAeroplane,
  updateAeroplane,
};
