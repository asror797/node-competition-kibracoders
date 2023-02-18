import { Document } from "mongoose";
import IBase from "./base";
export interface Clients extends IBase {
  fullName: string;
  phoneNumber: string;
}