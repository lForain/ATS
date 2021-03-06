import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class ReasonType extends Typegoose {
  @prop({ required: true })
  private description: string;
}

export const ReasonModel = new ReasonType().getModelForClass(ReasonType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
