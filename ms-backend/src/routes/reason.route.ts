import { Express } from "express";
import { reasonController } from "../controllers/reason.controller";

export default class ReasonRoute {
  constructor(app: Express) {
    app.route("/reason").get(reasonController.read);
    app.route("/reason").post(reasonController.create);
    app.route("/reason").put(reasonController.update);
    app.route("/reason").delete(reasonController.delete);
  }
}
