import { model, Schema } from "mongoose";
import { IBook } from "../Interfaces/book";


const bookSchema:Schema = new Schema(
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
      startDate: {
         type:String,
         required:true
      },
      endDate: {
         type:String
      }
   }
)

const bookModel = model<IBook & Document>('Book',bookSchema)


export default bookModel;