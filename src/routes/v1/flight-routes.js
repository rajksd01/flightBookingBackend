const express = require("express");
const router = express.Router();
const { FlightController } = require("../../controllers");
const { FlightMiddlewares } = require("../../middlewares");

/*  
route - api/v1/flights/flight
to create a new flight
*/
router.post(
  "/flight",
  FlightMiddlewares.validateCreateRequest,
  FlightController.createFlight
);
/*  
route - api/v1/flights/flight
to fetch all flights
*/
router.get(
  "/flight",

  FlightController.getAllFlight
);

/*  
route - api/v1/flights/flight/:id
to fetch a flight
*/
router.get(
  "/flight/:id",

  FlightController.getFlight
);

/*  
route - api/v1/flights/flight/seats/:id
to update seats*/
router.patch(
  "/flight/seats/:id",
  FlightMiddlewares.validateRemainingSeats,
  FlightController.updateSeats
);

module.exports = router;
