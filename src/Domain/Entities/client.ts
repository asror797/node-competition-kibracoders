import {model, Schema} from "mongoose";
import { Clients } from "../Interfaces/client";

const clientSchema: Schema = new Schema(
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
)

export const clientModel = model<Clients & Document>('Client', clientSchema)