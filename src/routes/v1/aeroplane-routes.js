const express = require("express");
const router = express.Router();
const { AeroplaneController } = require("../../controllers");
const { AeroplaneMiddleware } = require("../../middlewares");

/*  
route - api/v1/aeroplanes/aeroplane 
to create a new aeroplane
*/
router.post(
  "/aeroplane",
  AeroplaneMiddleware.validateCreateRequest,
  AeroplaneController.createAeroplane
);

/*  
route - api/v1/aeroplanes/aeroplane 
to delete an aeroplane
*/
router.delete("/aeroplane/:id", AeroplaneController.deleteAeroplane);
/*  
route - api/v1/aeroplanes/aeroplane 
to get all aeroplanes
*/

router.get("/aeroplane", AeroplaneController.getAllAeroplane);

/*  
route - api/v1/aeroplanes/aeroplane/:id
to get specific aeroplane based on id aeroplane
*/
router.get("/aeroplane/:id", AeroplaneController.getAeroplane);

/*  
route - api/v1/aeroplanes/aeroplane/:id
to update specific aeroplane based on id aeroplane
*/
router.patch("/aeroplane/:id", AeroplaneController.updateAeroplane);
module.exports = router;
