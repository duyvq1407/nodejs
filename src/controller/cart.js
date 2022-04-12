import Cart from "../models/cart";
import Product from "../models/product";
import User from "../models/user";

export const addToCart = async (req, res) => {
    try {
        const productId = req.body.product;
        const quantity = Number.parseInt(req.body.quantity);
        const orderBy = req.params.UserId;
        const productDetail = Product.findOne({_id: productId});
        if (!productDetail) {
            const cart = await new Cart({
                product: productId,
                quantity: quantity,
                orderBy: orderBy,
                price: productDetail.price,
                total: (productDetail.price * quantity)
            }).save();
            res.json(cart)
        }
    } catch (error) {
        return res.status(400).json({
            mess: "Thêm vào giỏ hàng thất bại"
        })
    }
}