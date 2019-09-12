import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

class HHType extends Typegoose {
  @prop({ required: true })
  private local: string;

  @prop({ required: true })
  private creationDate: Date;

  @prop({ required: true })
  private eventDate: Date;

  @prop({ required: true })
  private description: string;

  @prop({ required: true })
  private usersPresent: string[];
}

export const HHModel = new HHType().getModelForClass(HHType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
