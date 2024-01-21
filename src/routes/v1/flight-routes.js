const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

/*  
route - api/v1/flights/flight
to create a new aeroplane
*/
router.post(
  "/flight",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);

module.exports = router;
