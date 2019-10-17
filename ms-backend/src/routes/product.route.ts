import { Express } from 'express';
import ProductController from '../controllers/product.controller';

export default class ProductRoute {
  constructor(app: Express) {
    app.route('/product').get(ProductController.read);
    app.route('/product').post(ProductController.create);
    app.route('/product').put(ProductController.update);
    app.route('/product').delete(ProductController.delete);
  }
}
