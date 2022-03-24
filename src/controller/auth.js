import { use } from "express/lib/application";
import mongoose from "mongoose";

import User from "../models/user";
//login
export const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}).exec();
        if (!user) {
            res.status(400).json({
                message: "Email không chính xác"
            })
        }
        console.log(user)
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Mật khẩu không chính xác"
            })
        }
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
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
            res.status(400).json({
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
        res.status(400).json({
            error: "Không thêm được tài khoản"
        })
    }
};