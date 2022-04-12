import Cart from "../models/cart";
import Product from "../models/product";
import User from "../models/user";

export const addToCart = async (req, res) => {
    try {
        const productId = req.body.product;
        const quantity = Number.parseInt(req.body.quantity);
        const orderBy = req.params.userId;
        const productDetail = await Product.findOne({_id: productId}).exec();
        if (productDetail) {
            const cart = await new Cart({
                product: productId,
                name: productDetail.name,
                image: productDetail.image,
                quantity: quantity,
                orderBy: orderBy,
                price: productDetail.price,
                total: (productDetail.price * quantity)
            }).save();
            return res.json(cart)
        }
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được sản phẩm vào giỏ"
        })
    }
}

export const getCart = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}