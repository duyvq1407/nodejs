import mongoose from "mongoose";

import Book from "../models/book";

//get all Books
export const list = async (req, res) => {
    const PAGE_SIZE = 5;
    const page = parseInt(param.query.page);
    if(page){
        var skip = (page - 1) * PAGE_SIZE
        try {
            const books = await Book.find({}).skip(skip).limit(PAGE_SIZE).exec();
            res.json(books)
        } catch (error) {
            res.status(400).json({
                error: "Không có sản phẩm"
            })
        }        

    }else{
        try {
            const books = await Book.find({}).exec();
            res.json(books)
        } catch (error) {
            res.status(400).json({
                error: "Không có sản phẩm"
            })
        }        
    }
};
//get Book
export const get = async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id}).exec();
        res.json(book)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }
    // res.json(data.find(item => item.id == req.params.id));
};
//delete Book
export const remove = async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({_id: req.params.id});
        res.json(book)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được sản phẩm"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};
//edit Book
export const edit = async (req,res) =>{
    try {
        const book = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec();
        res.json(book);
    } catch (error) {
        res.status(400).json({
            error: "Không sửa được sản phẩm"
        })        
    }
}
//add Book
export const create = async (req, res) => {
    try {
        const book = await new Book(req.body).save();
        res.json(book)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })
    }
};

export const textSearch = async (req, res) => {
    try { 
        const conditions = { name : {$regex: req.query.key, $options: "i"}}
        const books = await Book.find(conditions)
        res.json(books)
    } catch (error) {
        res.status(400).json({
            error: "Không thêm được sản phẩm"
        })        
    }
}
