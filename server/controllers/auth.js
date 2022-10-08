import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hashedPassword });

        await newUser.save();
        res.status(200).json("User has been created");
    } catch (err) {
        next(err);
    }
}

export const signin = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return next(createError(404, "User not found"));
        }
        const validPassword = await bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return next(createError(400, "Wrong password"));
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT);
        const { password, ...others } = user._doc;
        res.cookie("access_token", token, { httpOnly: true }).status(200).json(others);
    } catch (err) {
        next(err);
    }
}