import { ObjectId } from "mongoose";
import IBase from "./base";

export interface IMaster extends IBase {
    fullName: string,
    phoneNumber: string,
    brandName: string,
    location: string,
    workStartTime: Date,
    workFinishTime: Date,
    avarageTimeForPerClient: number,
    service: ObjectId
}