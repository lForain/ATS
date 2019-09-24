import { Request, Response } from 'express';
import { UserModel } from '../models/user.model';

const nameRegexCriteria = new RegExp(/\w{1,999}/);
const emailRegexCriteria = new RegExp(/\w{1,999}/);
const pwRegexCriteria = new RegExp(/\w{1,999}/);
const phoneRegexCriteria = new RegExp(/\w{1,999}/);

async function validateUser(user){
  const { name, email, password, phone } = user;
  const messages = [];
  const nameTest = nameRegexCriteria.test(name);
  const emailTest = emailRegexCriteria.test(email);
  const passwordTest = pwRegexCriteria.test(password);
  const phoneTest = phoneRegexCriteria.test(phone);

  if (!nameTest) {
    messages.push('Invalid name');
  }

  if (!emailTest) {
    messages.push ('Invalid e-mail');
  }

  if (!passwordTest) {
    messages.push ('Invalid password');
  }

  if (!phoneTest) {
    messages.push ('Invalid phone');
  }

  return messages;
}

class UserController {
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body;

      user.birthDate = new Date(user.birthDate);
      const errorMessages = await validateUser(user);

      if (errorMessages.length > 0) {
        throw new Error(`Some error(s) found: ${errorMessages}`);
      }

      const data = await UserModel.create(user);

      res.setHeader('Access-Control-Allow-Origin', '*');

      res.json({
        data,
        message: 'User sucessfully created',
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
    const userFilter = req.body && req.body.name ? req.body : {};
    try {
      const data = await UserModel.find(userFilter);

      if (data.length === 0) {
        throw new Error ('User not found');
      }

      res.json({
        data,
        message: 'User(s) successfully returned',
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
      const { queryKey, queryValue, updateKey, updateValue } = req.body;
      const data = await UserModel.updateOne({ [queryKey]: queryValue }, { [updateKey]: updateValue });

      if (data.nModified === 0) {
        throw new Error('No user to update match your request filter');
      }

      res.json({
        data,
        message: 'User sucessfully updated',
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
      const data = await UserModel.deleteOne({ _id: req.body._id });

      if (data['deletedCount'] === 0) {
        throw new Error('No user to delete match your request');
      }

      res.json({
        data,
        message: 'User sucessfully deleted',
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

export default new UserController();
