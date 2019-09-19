import { Express } from 'express';
import UserController from '../controllers/reason.controller';

export default class UserRoute {
  constructor(app: Express) {
    app.route('/user').get(UserController.read);
    app.route('/user').post(UserController.create);
    app.route('/user').put(UserController.update);
    app.route('/user').delete(UserController.delete);
  }
}
