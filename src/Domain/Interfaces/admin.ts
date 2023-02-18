import { Document } from "mongoose";
import IBase from "./base";

export interface Admin extends IBase {
  adminName: string;
  password: string;
}