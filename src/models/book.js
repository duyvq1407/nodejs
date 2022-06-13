import { text } from "express";
import mongoose , {Schema} from "mongoose";
const { ObjectId } = mongoose.Types;

const bookSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    sale_price: {
        type: Number,
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    status: {
        type: Number,
        default: 1
    }
}, { timestamps: true});

export default mongoose.model('Book', bookSchema);
