import Category from "../models/category";
import Product from "../models/product";
 
export const addCate = async (req, res) => {
    try {
        const cate = await new Category(req.body).save();
        res.json(cate)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
};
export const read = async (req, res) => {
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const products = await Product.find({category}).select('-category').exec();
        res.json({
            category,products
        })
    } catch (error) {
    }
};