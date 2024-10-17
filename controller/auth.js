import userModel from "../models/AdminM.js";
import bcrypt from "bcrypt";
import Token from "../models/Token.js";
import jwt from "jsonwebtoken"

export const login = async (req, res, next) => {
  try {
    console.log(req.body, "req.body");
    
    const { name, password } = req.body;

    const user = await userModel.findOne({ name });
    if (!user) {
        return res.status(401).json({ success: false, message: 'User not found.' });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ success: false, message: 'Wrong password.' });
    }

    const token = jwt.sign({ id: user.id, name: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ message:"Login successfull", token, status:true })
    
  } catch (error) {
    console.log(error);
    res.status(200).json({ success: false, message: "Login failed" });
  }
};

export const logout = async (req, res, next) => {
  try {
    const token = req.headers.cookie;
    console.log(req.headers.cookie);
    if (!token)
      return res.status(400).json({
        success: false,
        token: token,
        message: "you are not logged in ",
      });
    await Token.findOneAndDelete({ token: token });
    res.status(200).json({ success: false, message: "you are logged out " });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "failed to log out" });
  }
};
