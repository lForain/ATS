import * as mongoose from "mongoose";
import { Typegoose, prop } from "typegoose";

class ReasonType extends Typegoose {
  @prop({ required: true })
  private reasonDescription!: string;
}

export const ReasonModel = new ReasonType().getModelForClass(ReasonType, {
  existingMongoose: mongoose,
  existingConnection: null,
  schemaOptions: null,
});
