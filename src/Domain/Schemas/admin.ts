import { model, Schema } from "mongoose";
import { Admin } from "../Interfaces/admin";

export const adminSchema: Schema = new Schema<Admin>(
  {
    adminName: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
);

