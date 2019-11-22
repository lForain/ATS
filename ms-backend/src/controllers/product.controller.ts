import { Request, Response } from "express";
import { ProductModel } from "../models/product.model";

class ProductController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const data = await ProductModel.create(req.body);

      res.json({
        data,
        message: "User sucessfully created",
        status: true
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false
      });
    }
  }

  public async read(req: Request, res: Response): Promise<void> {
    const productFilter = req.body ? req.body : {};
    try {
      const data = await ProductModel.find(productFilter);

      if (data.length === 0) {
        throw new Error("Product(s) not found");
      }

      res.json({
        data,
        message: "Product(s) successfully returned",
        status: true
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false
      });
    }
  }

  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { queryKey, queryValue, updateKey, updateValue } = req.body;
      const data = await ProductModel.updateOne(
        { [queryKey]: queryValue },
        { [updateKey]: updateValue }
      );

      if (data.nModified === 0) {
        throw new Error("No product to update match your request filter");
      }

      res.json({
        data,
        message: "Product sucessfully updated",
        status: true
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false
      });
    }
  }

  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const data = await ProductModel.deleteOne({ _id: req.body._id });

      if (data["deletedCount"] === 0) {
        throw new Error("No product to delete match your request");
      }

      res.json({
        data,
        message: "Product sucessfully deleted",
        status: true
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false
      });
    }
  }
}

export default new ProductController();
