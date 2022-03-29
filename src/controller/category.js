import Category from "../models/category";
import Product from "../models/product";
 
//get all categories
export const listCate = async (req, res) => {
    try {
        const category = await Category.find({}).exec();
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
};
export const addCate = async (req, res) => {
    try {
        const cate = await new Category(req.body).save();
        res.json(cate)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được danh mục"
        })
    }
};
//delete category
export const removeCate = async (req, res) => {
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id});
        res.json(category)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được danh mục"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};
//edit product
export const editCate = async (req,res) =>{
    try {
        const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "Không sửa được danh mục"
        })        
    }
}
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