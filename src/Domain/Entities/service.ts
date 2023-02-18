import { model, Schema } from "mongoose";
import { IService } from "../Interfaces/service";




const serviceSchema: Schema = new Schema(
   {
      title: {
         type:String,
         required:true
      }
   }
)


const serviceModel = model<IService & Document>('Service',serviceSchema)

// const newService = new serviceModel()

export default serviceModel;