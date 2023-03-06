import { Schema, model } from "mongoose";
import { Image } from '../interfaces/image.interface';

const ImageSchema = new Schema<Image>(
    {
        fileName: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

export const ImageModel = model('images', ImageSchema);