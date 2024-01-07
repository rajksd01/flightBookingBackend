const express = require("express");
const app = express();
const { serverConfig, logConfig } = require("./config");
const { aeroplaneController, infoController } = require("./controllers");
const apiRoutes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(serverConfig.PORT, () => {
  console.log("listening on port " + serverConfig.PORT);
  infoController.info();
  logConfig.log({
    level: "info",
    message: `Listen on port ${serverConfig.PORT}`,
  });
});
