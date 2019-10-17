import { Express } from 'express';
import EmailController from '../controllers/email.controller';

export default class ReasonRoute {
  constructor(app: Express) {
    app.route('/emailsender').post(EmailController.create);
  }
}
