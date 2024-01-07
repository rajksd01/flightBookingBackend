const express = require("express");
const { serverConfig, logConfig } = require("./config");
const app = express();

app.listen(serverConfig.PORT, () => {
  console.log("listening on port " + serverConfig.PORT);
  logConfig.log({
    level: "info",
    message: `Listen on port ${serverConfig.PORT}`,
  });
});
