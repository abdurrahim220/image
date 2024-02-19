import { Schema, model, models, Document, Types } from "mongoose";



export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: URL;
    width?: number;
    height?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: URL;
    color?: string;
    prompt?: string;
    author: {
        _id: string,
        firstName: string,
        lastName: string,
    }
    createdAt: Date;
    updatedAt: Date;
}

const ImageSchema = new Schema({
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: URL }, color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true })


const Image = models?.Image || model("Image", ImageSchema)

export default Image;