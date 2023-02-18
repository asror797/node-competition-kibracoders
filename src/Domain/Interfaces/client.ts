import { Document } from "mongoose";

export interface Clients extends Document{
  fullName:string;
  phoneNumber:string;
}