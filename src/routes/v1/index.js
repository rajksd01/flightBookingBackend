const express = require("express");
const router = express.Router();
const aeroplanesRoutes = require("./aeroplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

router.use("/aeroplanes", aeroplanesRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);

module.exports = router;
