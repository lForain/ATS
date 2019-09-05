import { Request , Response } from "express";
import { HHModel } from "../models/happyhour.model";

class HHController {
  public async read(req: Request, res: Response): Promise<void> {
    try {
      const reasonfilter = req.body && req.body.reasonDescription ? req.body : {};
      const reason = await ReasonModel.find(reasonfilter);
      res.send({
        data: reason,
        message: "Reason(s) were successfully returned",
        status: true,
      });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const happyhour = req.body;
      await HHModel.create(happyhour);
      res.send({ status: true });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }
}
