import { model, Schema } from "mongoose";
import {Trip} from '../Interfaces/trip'

export const tripSchema:Schema = new Schema(
  {
    masterId:{
      type:Schema.Types.ObjectId,
      ref:'Master',
      required:true
    },
    clientId:{
      type:Schema.Types.ObjectId,
      ref:'Master',
      required:true
    },
    poin:{
      type:Number,
      required:true
    }

  }
);