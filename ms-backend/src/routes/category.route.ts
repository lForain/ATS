import { Express } from 'express';
import CategoryController from '../controllers/category.controller';

export default class CategoryRoute {
  constructor(app: Express) {
    app.route('/category').get(CategoryController.read);
    app.route('/category').post(CategoryController.create);
    app.route('/caregory').put(CategoryController.update);
    app.route('/caregory').delete(CategoryController.delete);
  }
}
