import * as mongoose from "mongoose";
import { prop, Typegoose } from "../lib/typegoose";

class ReasonType extends Typegoose {
  @prop({ required: true })
  private reasonDescription!: string;
}

export const ReasonModel = new ReasonType().getModelForClass(ReasonType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
