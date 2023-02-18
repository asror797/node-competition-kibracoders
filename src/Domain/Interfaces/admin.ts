import { Document } from "mongoose";

export interface Admin extends Document{
  adminName:string;
  password:string;
}