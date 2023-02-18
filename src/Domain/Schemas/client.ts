import {model, Schema} from "mongoose";
import { Clients } from "../Interfaces/client";

export const clientSchema: Schema = new Schema(
  {
    fullName:{
      type:String,
      required:true
    },
    phoneNumber:{
      type:String,
      required:true
    }
  }
);