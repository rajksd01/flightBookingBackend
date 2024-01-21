const express = require("express");
const router = express.Router();
const { AirportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");

/*  
route - api/v1/airports/airport 
to create a new airport
*/
router.post(
  "/airport",
  AirportMiddleware.validateCreateRequest,
  AirportController.createAirport
);

/*  
  route - api/v1/airports/airport  
  to delete an airport
  */
router.delete("/airport/:id", AirportController.deleteAirport);
/*  
  route - api/v1/airports/airport 
  to get all airports
  */

router.get("/airport", AirportController.getAllAirport);

/*  
  route - api/v1/airports/airport/:id
  to get specific airport based on id airport
  */
router.get("/airport/:id", AirportController.getAirport);

/*  
  route - api/v1/airports/airport/:id
  to update specific airport based on id airport
  */
router.patch("/airport/:id", AirportController.updateAirport);
module.exports = router;
