import { Model, model, Schema } from "mongoose";
import { IReasonDb } from "../interfaces/reason.interface";

export let reasonSchema: Schema = new Schema({
  reasonDescription: {
    required: true,
    type: Schema.Types.String,
  },
});

export const Reason: Model<IReasonDb> = model<IReasonDb>(
  "Reason",
  reasonSchema,
);
