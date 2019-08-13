import { Request, Response } from "express";
import { ReasonModel } from "../models/reason.model";

export default class ReasonController {
  public async read(req: Request, res: Response): Promise<void> {
    const reasonFilter = req.body;
    await ReasonModel.find(reasonFilter).exec((err, reasons) => {
      try {
        res.send({
          data: reasons,
          message: "Reason(s) sucessfully returned.",
          status: true,
        });
      } catch (err) {
        res.send({
          message: err.message,
          status: false,
        });
      }
    });
  }

  public async create(req: Request, res: Response): Promise<void> {
    try {
      const reason = req.body;
      await ReasonModel.create(reason);
      res.send({ status: true });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }
}

export const reasonController = new ReasonController();
