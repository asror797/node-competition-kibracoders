import { ObjectId } from "mongoose";
import IBase from "./base"
export default interface ILog extends IBase
{
    type: string,
    message: string,
    innerMessage?: string
}