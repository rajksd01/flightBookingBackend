const express = require("express");
const router = express.Router();
const aeroplanesRoutes = require("./aeroplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");
const flightRoutes = require("./flight-routes");

router.use("/aeroplanes", aeroplanesRoutes);
router.use("/cities", cityRoutes);
router.use("/airports", airportRoutes);
router.use("/flights", flightRoutes);

module.exports = router;
