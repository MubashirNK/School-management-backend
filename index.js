import express from "express";
import mongoose from "mongoose";
import AdminR from "./routes/AdminR.js";
import fileUpload from "express-fileupload";
import adminModel from "./models/AdminM.js";
// const express = require('express')
import { connectDB } from "./config.js";

const app = express();

// const mongoose = require('mongoose');

app.use(express.json());
connectDB();

const port = 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.use("/api/admin", AdminR);
