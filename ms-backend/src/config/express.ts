import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import * as logger from "morgan";
import * as path from "path";
import config from "./config";

export default function () {
  const app = express();

  for (const model of config.globFiles(config.models)) {
    require(path.resolve(model));
  }

  mongoose.set("useNewUrlParser", true);
  mongoose
    .connect(config.mongodb, {
      promiseLibrary: global.Promise,
    })
    .catch(() => {
      console.log("Error connecting to mongo");
    });

  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, "../../src/public")));

  for (const route of config.globFiles(config.routes)) {
    console.log(route);
    require(path.resolve(route)).default(app);
  }

  app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });

  app.use(
    (req: express.Request, res: express.Response, next: Function): void => {
      const err: Error = new Error("Not Found");
      next(err);
    },
  );

  return app;
}
