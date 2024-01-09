const { StatusCodes } = require("http-status-codes");
const { errorResponse, error } = require("../utils/common/error-response");

const validAeroplaneInput = (req, res, next) => {
  if (!req.body.modelNumber) {
    errorResponse.message = "ModelNumber is required ";
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = validAeroplaneInput;
