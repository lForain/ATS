import { Express } from 'express';
import HHController from '../controllers/happyhour.controller';

export default class ReasonRoute {
  constructor(app: Express) {
    app.route('/happyhour').get(HHController.read);
    app.route('/happyhour').post(HHController.create);
    app.route('/happyhour').put(HHController.update);
    app.route('/happyhour').delete(HHController.delete);
  }
}
