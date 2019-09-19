import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class UserType extends Typegoose {
  @prop({ required: true })
  private name: string;

  @prop({ required: true })
  private email: string;

  @prop({ required: true })
  private password: string;

  @prop({ required: true })
  private cpf: string;

  @prop({ required: true })
  private birthDate: Date;

  @prop({ required: false })
  private adress: string;

  @prop({ required: true })
  private phone: string;
}

export const UserModel = new UserType().getModelForClass(UserType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
