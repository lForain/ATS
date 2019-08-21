import { Document, Schema } from "mongoose";

export interface IReasonDb extends Document {
  reasonDescription: string;
}

export interface IReason {
  _id: Schema.Types.ObjectId;
  reasonDescription: string;
}

export interface IReasonResponse {
  status: boolean;
  message?: string;
  data?: [IReason];
}
