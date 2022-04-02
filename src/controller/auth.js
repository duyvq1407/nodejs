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
                role: user.role
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
    const {email, name, password} = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if (existUser) {
            return res.status(400).json({
                message: "Tài khoản đã tồn tại"
            })
        }
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
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