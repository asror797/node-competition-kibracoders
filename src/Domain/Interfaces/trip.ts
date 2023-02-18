import { Document } from "mongoose";

export interface Trip extends Document{
  masterId:string;
  clientId:string;
  point:number
}