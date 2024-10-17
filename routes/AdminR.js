import express from "express";
import { createUser, getuser } from "../controller/Admin.js";

const router = express.Router();
router.post("/create", createUser);
router.get("/create", getuser);

export default router;
