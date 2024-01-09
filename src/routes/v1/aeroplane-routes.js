const express = require("express");
const router = express.Router();
const { AeroplaneController } = require("../../controllers");
const { AeroplaneMiddleware } = require("../../middlewares");

router.post(
  "/aeroplane",
  AeroplaneMiddleware.validateCreateRequest,
  AeroplaneController.createAeroplane
);

router.delete("/aeroplane", AeroplaneController.deleteAeroplane);

module.exports = router;
