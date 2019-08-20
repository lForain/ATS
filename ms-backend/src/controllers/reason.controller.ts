import { Request, Response } from "express";
import { Reason } from "../models/reason.model";

export default class ReasonController {
  public async read(req: Request, res: Response): Promise<void> {
    const reasonfilter = req.body && req.body.reasonDescription ? req.body : {};
    try {
      const reason =  await Reason.find(reasonfilter);
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
      const reason = req.body;
      await Reason.create(reason);
      res.send({ status: true });
    } catch (err) {
      res.send({
    message: err.message,
        status: false,
      });
  }
}

  public async update(req: Request, res: Response): Promise < void> {
  try {
    const query = req.body.reasonDescription;
    const update = req.body.newReason;
    await Reason.updateOne({ reasonDescription: query }, { reasonDescription: update });
    res.send({ status: true });
  } catch(err) {
    res.send({
    message: err.message,
      status: false,
      });
}
  }

  public async delete (req: Request, res: Response): Promise < void> {
  try {
    const query = req.body.id;
    await Reason.deleteOne({ _id: query });
    res.send({ status: true });
  } catch(err) {
    res.send({
      message: err.message,
      status: false,
    });
  }
}
}

export const reasonController = new ReasonController();
