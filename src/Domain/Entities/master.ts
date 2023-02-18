import {model, Model, Schema} from "mongoose";
import IMaster from "../Interfaces/master";


export const masterSchema = new Schema<IMaster>({
    fullName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    workStartTime: {
        type: Date,
        required: true,
    },
    workFinishTime: {
        type: Date,
        required: true,
    },
    avarageTimeForPerClient: {
        type: Number,
        required: true,
    },
    service: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Service"
    }
})



export const masterModel = model<IMaster>("Master", masterSchema);