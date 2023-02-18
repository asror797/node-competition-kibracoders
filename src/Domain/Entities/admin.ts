import {model, Schema} from "mongoose";
import { Admin } from "../Interfaces/admin";

const adminSchema: Schema = new Schema(
  {
    adminName:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  }
)

export const clientModel = model<Admin & Document>('Admin', adminSchema)
