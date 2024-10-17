import userModel from "../models/AdminM.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res, next) => {
  try {
    const { name, password, role, email, mobile } = req.body;

    const existingUser = await userModel.findOne({ name });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Name already taken. Please choose a different one.",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(password, salt);
    await userModel({
      name,
      email,
      mobile,
      role,
      password: pass,
    }).save();

    res.status(200).json({
      success: true,
      message: "Registration successfull ",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, message: "Registration failed" });
  }
};

export const getuser = async (req, res, next) => {
  try {
    const admin = await userModel.findById(req.body.userId);
    res.status(200).json({ success: true, data: admin });
  } catch (err) {
    console.log(err);
    res.status(400).json("failed to get admin");
  }
};

export const updateAdmin = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    let updateData = req.body;
    const admin = await userModel.findByIdAndUpdate(userId, {
      new: true,
    });
    res.status(200).json({
      data: admin,
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "failed to update user" });
  }
};
