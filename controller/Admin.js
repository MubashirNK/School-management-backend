import adminModel from "../models/AdminM.js";

import { v4 as uuid } from "uuid";
import fs from "fs";
import bcrypt from "bcrypt";

export const createAdmin = async (req, res, next) => {
    console.log(req.body, "req.body");
    
  try {
    const salt = bcrypt.genSaltSync(10);
    const pass = bcrypt.hashSync(req.body.password, salt);
    await adminModel({
      ...req.body,
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
