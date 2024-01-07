const express = require("express");
const router = express.Router();
const { AeroplaneController } = require("../../controllers");

router.post("/aeroplane", AeroplaneController.createAeroplane);

router.delete("/aeroplane", AeroplaneController.deleteAeroplane);

module.exports = router;
