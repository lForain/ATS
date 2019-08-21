import { Express } from "express";
import ReasonController from "../controllers/reason.controller";

export default class ReasonRoute {
  constructor(app: Express) {
    app.route("/reason").get(ReasonController.read);
    app.route("/reason").post(ReasonController.create);
    app.route("/reason").put(ReasonController.update);
    app.route("/reason").delete(ReasonController.delete);
  }
}
