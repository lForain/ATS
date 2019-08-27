import { Request, Response } from "express";
import { ReasonModel } from "../models/reason.model";

const descriptionRegexCriteria = new RegExp(/\w{1,999}\s\w{1,999}\s\w{1,999}/);

class ReasonController {
  public async read(req: Request, res: Response): Promise<void> {
    const reasonfilter = req.body && req.body.reasonDescription ? req.body : {};
    try {
      const data = await ReasonModel.find(reasonfilter);
      res.send({
        data,
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
      const description = req.body.reasonDescription;
      const test = descriptionRegexCriteria.test(description);

      if (!test) {
        throw new Error("Description does not contain a text value or isn't longer than two words");
      }

      const data = await ReasonModel.create(req.body);
      res.send({
        data,
        message: "Reason sucessfully created",
        status: true,
      });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const query = req.body.reasonDescription;
      const update = req.body.newReason;
      await ReasonModel.updateOne({ reasonDescription: query }, { reasonDescription: update });
      res.send({ status: true });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const query = req.body.id;
      await ReasonModel.deleteOne({ _id: query });
      res.send({ status: true });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }
}

export default new ReasonController();
