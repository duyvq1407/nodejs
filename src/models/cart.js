import mongoose, {Schema} from "mongoose";
const {ObjectId} = mongoose.Types;

const cartSchema = Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: Number, 
        min: 1
    },
    orderBy: {
        type: ObjectId,
        ref: "User"
    },
    total: {
        type: Number
    }
})

export default mongoose.model("Cart", cartSchema)