const { StatusCodes } = require("http-status-codes");
const { AeroplaneServices } = require("../services");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

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
    const aeroplane = await AeroplaneServices.deleteAeroplane(req.body.id);

    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Airplane deleted successfully",
      data: aeroplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Airplane deletion failed",
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createAeroplane,
  deleteAeroplane,
};
