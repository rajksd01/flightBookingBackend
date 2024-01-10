const express = require("express");
const router = express.Router();
const { CityController } = require("../../controllers");

/*  
route - api/v1/cities/city 
to create a new City
*/
router.post("/city", CityController.createCity);

/*  
  route - api/v1/Citys/City 
  to delete an City
  */
router.delete("/city/:id", CityController.deleteCity);
/*  
  route - api/v1/Citys/City 
  to get all Citys
  */

router.get("/city", CityController.getAllCities);

/*  
  route - api/v1/Citys/City/:id
  to get specific City based on id City
  */
router.get("/city/:id", CityController.getCity);

/*  
  route - api/v1/Citys/City/:id
  to update specific City based on id City
  */
router.patch("/city/:id", CityController.updateCity);
module.exports = router;
