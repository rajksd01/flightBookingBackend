const { StatusCodes } = require("http-status-codes");
const { AeroplaneServices } = require("../services");

async function createAeroplane(req, res) {
  try {
    const aeroplane = await AeroplaneServices.createAeroplane({
      name: req.body.name,
      modelNumber: req.body.modelNumber,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Airplane created successfully",
      data: aeroplane,
      error: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Airplane creation failed",
      data: {},
      error: error,
    });
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
