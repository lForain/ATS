import * as https from "https";
import config from "./config/config";

const app = require("./config/express").default();

const server: https.Server = new https.Server(app);

server.listen(8443);

server.listen(config.port);

server.on("error", (e: Error) => {
  console.log("Error starting server" + e);
});

server.on("listening", () => {
  console.log(
    `Server started on port ${config.port} on env ${process.env.NODE_ENV ||
    "dev"} dbcon ${config.mongodb}`);
});
