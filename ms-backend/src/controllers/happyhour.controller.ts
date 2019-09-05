import { Request , Response } from 'express';
import { HHModel } from '../models/happyhour.model';

const descriptionRegexCriteria = new RegExp(/\w{1,999}\s\w{1,999}\s\w{1,999}/);
const localRegexCriteria = new RegExp(/\w{1,99}/);

class HHController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const happyhour = req.body;
      const descriptionTest = descriptionRegexCriteria.test(happyhour.description);
      const localTest = localRegexCriteria.test(happyhour.local);

      if (!descriptionTest) {
        throw new Error("Description does not contain a text value or isn't longer than two words");
      }

      if (!localTest) {
        throw new Error('Insert a valid local name');
      }

      if (happyhour.creationDate.getTime > happyhour.eventDate.getTime) {
        throw new Error("You should enter an event date that's after the actual date");
      }

      const data = await HHModel.create(happyhour);

      res.json({
        data,
        message: 'Happy hour sucessfully created',
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }

  public async read(req: Request, res: Response): Promise<void> {
    try {
      const hhfilter = req.body;
      const data = await HHModel.find(hhfilter);

      if (data.length === 0) {
        throw new Error ('No happy hour found');
      }

      res.json({
        data,
        message: 'Happy hour(s) were successfully returned',
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const queryKey = req.body.queryKey;
      const queryValue = req.body.queryValue;

      const updateKey = req.body.updateKey;
      const updateValue = req.body.updateValue;

      const data = await HHModel.updateOne({ [queryKey]: queryValue }, { [updateKey]: updateValue });

      if (data.nModified === 0) {
        throw new Error('No happy hour to update match your request filter');
      }

      res.json({
        data,
        message: 'Happy hour sucessfully updated',
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const query = req.body._id;
      const data = await HHModel.deleteOne({ _id: query });

      if (data['deletedCount'] === 0) {
        throw new Error('No happy hour to delete match your request');
      }

      res.json({
        data,
        message: 'Happy hour sucessfully deleted',
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }
}

export default new HHController();
