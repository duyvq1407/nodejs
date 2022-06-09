import mongoose from "mongoose";
import jwt from "jsonwebtoken"

import User from "../models/user";
//login
export const login = async (req, res) => {
    const {email, password} = req.body;
    try {        
        const user = await User.findOne({email}).exec();
        if (!user) {
            return res.status(400).json({
                message: "Email không chính xác"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(400).json({
                message: "Mật khẩu không chính xác"
            })
        }
        const token = jwt.sign({_id: user._id},"123456",{expiresIn: '1h'})
        res.json({
            token,
            user:{
                _id: user._id,
                email: user.email,
                name: user.name,
                role: user.role,
                status: user.status
            }
        })
    } catch (error) {
        res.status(400).json({
            error: "Lỗi đăng nhập"
        })
    }
};
//register
export const register = async (req, res) => {
    const {email, name, password, role, status} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({email, name, password, role, status}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name,
                status: user.status,
                role: user.role
            }
        })
    } catch (error) {
        return res.status(400).json({
            error: "Không thêm được tài khoản"
        })
    }
};

export const read = async (req, res) => {
    try {
        const user = await User.findOne({_id : req.params.id}).exec();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}
export const list = async (req, res) => {
    try {
        const user = await User.find({}).exec();
        res.json(user)
    } catch (error) {
        
    }
}
//edit Book
export const edit = async (req,res) =>{
    try {
        const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            error: "Không sửa được"
        })        
    }
}
//delete category
export const remove = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({_id: req.params.id});
        res.json(user)
    } catch (error) {
        res.status(400).json({
            error: "Không tìm được danh mục"
        })
    }

    // res.json(data.filter(item => item.id != req.params.id));
};