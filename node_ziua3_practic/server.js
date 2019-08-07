const https = require("https");
const app = require("./app");
const fs = require("fs");

const server = https
  .createServer(
    {
      key: fs.readFileSync("./src/server.key"),
      cert: fs.readFileSync("./src/server.cert")
    },
    app
  )
  .listen(5000);
