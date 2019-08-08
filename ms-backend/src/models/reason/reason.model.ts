import { Document, Model, model, Schema } from "mongoose";

export interface IReason extends Document {
  reasonDescription: string;
}

export let reasonSchema: Schema = new Schema({
  reasonDescription: {
    required: true,
    type: Schema.Types.String,
  },
});

export const Reason: Model<IReason> = model<IReason>(
  "Reason",
  reasonSchema,
);
