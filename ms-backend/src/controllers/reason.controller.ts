import { Request, Response } from "express";
import { ReasonModel } from "../models/reason.model";

const descriptionRegexCriteria = new RegExp(/\w{1,999}\s\w{1,999}\s\w{1,999}/);

class ReasonController {
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

  public async read(req: Request, res: Response): Promise<void> {
    const reasonfilter = req.body && req.body.reasonDescription ? req.body : {};
    try {
      const data = await ReasonModel.find(reasonfilter);

      if (data.length === 0) {
        throw new Error ("There isn't any reason with this description");
      }

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

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const query = req.body.reasonDescription;
      const update = req.body.newReason;
      const data = await ReasonModel.updateOne({ reasonDescription: query }, { reasonDescription: update });

      if (data.nModified === 0) {
        throw new Error("No reason to update match your request filter");
      }

      res.send({
        data,
        message: "Reason sucessfully updated",
        status: true,
      });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const query = req.body._id;
      const data = await ReasonModel.deleteOne({ _id: query });

      if (data["deletedCount"] === 0) {
        throw new Error("No reason to delete match your request");
      }

      res.send({
        data,
        message: "Reason sucessfully deleted",
        status: true,
      });
    } catch (err) {
      res.send({
        message: err.message,
        status: false,
      });
    }
  }
}

export default new ReasonController();
