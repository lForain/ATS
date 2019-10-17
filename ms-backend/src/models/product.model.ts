import * as mongoose from 'mongoose';
import { prop, Typegoose } from 'typegoose';

export class ProductType extends Typegoose {
  @prop({ required: true })
  private name: string;

  @prop({ required: true })
  private description: string;

  @prop({ required: true })
  private supplyerEmail: string;

  @prop({ required: true })
  private supplyerPhone: string;

  @prop({ required: true })
  private supplyerName: string;

  @prop({ required: true })
  private buyPrice: string;

  @prop({ required: true })
  private sellPrice: string;

  @prop({ required: true })
  private quantity: string;
}

export const ProductModel = new ProductType().getModelForClass(ProductType, {
  existingConnection: null,
  existingMongoose: mongoose,
  schemaOptions: null,
});
