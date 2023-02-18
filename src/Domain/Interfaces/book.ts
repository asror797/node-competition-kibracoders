import { Document } from "mongoose"



export interface IBook extends Document {
   masterId:string
   clientId:string
   startDate:string
   endDate:string
   status:string
}