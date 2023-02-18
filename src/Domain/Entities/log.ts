import { Schema, Model, model } from "mongoose";
import IBase from "../Interfaces/base";
import ILog from "../Interfaces/log";


export const logSchema = new Schema<ILog>(
    {
        type: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        innerMessage: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

export const logModel = model("Log", logSchema);