<<<<<<< HEAD
import * as http from "http";
import config from "./config/config";

const app = require("./config/express").default();

const server: http.Server = new http.Server(app);

server.listen(config.port);

server.on("error", (e: Error) => {
  console.log("Error starting server" + e);
});

server.on("listening", () => {
  console.log(
    `Server started on port ${config.port} on env ${process.env.NODE_ENV ||
    "dev"} dbcon ${config.mongodb}`);
});
=======
import { Server } from "https";

const app = require("./config/server").default();
>>>>>>> 13a2a2437543525da87ba09a86f6fe18f318f9a7
