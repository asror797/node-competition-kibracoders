import { model, Schema } from "mongoose";
import { IBook } from "../Interfaces/book";


export const bookSchema:Schema = new Schema(
   {
      masterId: {
         type: Schema.Types.ObjectId,
         ref:'Master',
         required:true
      },
      clientId: {
         type: Schema.Types.ObjectId,
         ref:'Client',
         required:'true'
      },
      status:{
         type:String,
         required:true,
         enum:['pending','proccesing','canceled']
      },
      startDate: {
         type:String,
         required:true
      },
      endDate: {
         type:String
      }
   },
   {
      timestamps:true
   }
);

