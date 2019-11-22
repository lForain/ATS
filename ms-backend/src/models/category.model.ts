import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class CategoryType extends Typegoose {
  @prop({ required: true })
  private name: string;
}

export const CategoryModel = new CategoryType().getModelForClass(CategoryType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
