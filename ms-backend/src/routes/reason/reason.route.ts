import { Express } from "express";
import { reasonController } from "../../controllers/reason/reason.controller";

export default class ReasonRoute {
  constructor(app: Express) {
    app.route("/msg").get(reasonController.msg);
  }
}
