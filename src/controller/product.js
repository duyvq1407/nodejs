import mongoose from "mongoose";

import Product from "../models/product";

//get all products
export const list = async (req, res) => {
    try {
        const product = await Product.find({}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không có sản phẩm"
        })
    }
};
//get product
export const get = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).exec();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
    // res.json(data.find(item => item.id == req.params.id));
};
//delete product
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id});
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};
//edit product
export const edit = async (req,res) =>{
    try {
        const product = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "Không sửa được sản phẩm"
        })        
    }
}
//add product
export const create = async (req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
};

export const textSearch = async (req, res) => {
    try { 
        const conditions = { name : {$regex: req.query.key, $options: "i"}}
        const products = await Product.find(conditions)
        res.json(products)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })        
    }
}
