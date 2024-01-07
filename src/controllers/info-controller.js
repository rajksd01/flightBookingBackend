const { statusCodes } = require("http-status-codes");

const info = (req, res) => {
  return;
  res.status(statusCodes.OK).json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
