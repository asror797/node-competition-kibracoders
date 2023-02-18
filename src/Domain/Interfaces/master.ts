import { Document, ObjectId } from "mongoose";

export default interface IMaster extends Document {
    fullName: string,
    phoneNumber: string,
    brandName: string,
    location: string,
    workStartTime: Date,
    workFinishTime: Date,
    avarageTimeForPerClient: number,
    service: ObjectId
}