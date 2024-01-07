const express = require("express");
const router = express.Router();
const aeroplanesRoutes = require("./aeroplane-routes");

router.use("/aeroplanes", aeroplanesRoutes);

module.exports = router;
