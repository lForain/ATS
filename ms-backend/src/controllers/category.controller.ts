import { Request, Response } from 'express';
import { CategoryModel } from '../models/category.model';

const descriptionRegexCriteria = new RegExp(/\w{1,999}/);

class CategoryController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const name = req.body.name;
      const test = descriptionRegexCriteria.test(name);

      if (!test) {
        throw new Error('Name does not contain a text value');
      }

      const data = await CategoryModel.create(req.body);
      res.json({
        data,
        message: 'Category sucessfully created',
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
    const categoryFilter = req.body && req.body.name ? req.body : {};
    try {
      const data = await CategoryModel.find(categoryFilter);

      if (data.length === 0) {
        throw new Error ("There isn't any category with this name");
      }

      res.json({
        data,
        message: 'Category(s) were successfully returned',
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
      const query = req.body.name;
      const update = req.body.newCategory;
      const data = await CategoryModel.updateOne({ name: query }, { name: update });

      if (data.nModified === 0) {
        throw new Error('No category to update match your request filter');
      }

      res.json({
        data,
        message: 'Category sucessfully updated',
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
      const data = await CategoryModel.deleteOne({ _id: query });

      if (data['deletedCount'] === 0) {
        throw new Error('No category to delete match your request');
      }

      res.json({
        data,
        message: 'Category sucessfully deleted',
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

export default new CategoryController();
