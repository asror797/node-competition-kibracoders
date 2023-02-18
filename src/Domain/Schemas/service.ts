import { model, Schema } from "mongoose";
import { IService } from "../Interfaces/service";




export const serviceSchema: Schema = new Schema(
   {
      title: {
         type:String,
         required:true
      }
   }
);
