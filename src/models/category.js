import mongoose , {Schema} from "mongoose";

const categorySchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true
    },
    status: {
        type: Number
    }
}, { timestamps: true});

export default mongoose.model('Category', categorySchema);
