import { model, Schema } from "mongoose";
import {Trip} from '../Interfaces/trip'

const tripSchema:Schema = new Schema(
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
)

export const tripModel = model<Trip & Document>('Trip', tripSchema)