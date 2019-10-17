import { Request, Response } from 'express';
import Mail from './emailservice.controller';

class EmailController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      Mail.to = 'lucas.forain@uniriotec.br';
      Mail.subject = 'ATS';
      Mail.message = 'você tem um novo orçamento para fazer';
      const result = Mail.sendMail();

      res.status(200).json({ 'result': result });
    } catch (err) {
      res.json({
        error: err.message,
        status: false,
      });
    }

    }
}

export default new EmailController();
