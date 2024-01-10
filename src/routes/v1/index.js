const express = require("express");
const router = express.Router();
const aeroplanesRoutes = require("./aeroplane-routes");
const cityRoutes = require("./city-routes");

router.use("/aeroplanes", aeroplanesRoutes);
router.use("/cities", cityRoutes);

module.exports = router;
