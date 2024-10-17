import 'dotenv/config';
import express from "express";
import mongoose from "mongoose";
import AdminRoutes from "./routes/AdminR.js";
import userModel from "./models/AdminM.js";
import { connectDB } from "./config.js";
import authRoutes from "./routes/authR.js"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());


app.use(express.json());
connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.use("/api/auth",authRoutes)
app.use("/api/admin", AdminRoutes);
