import express from "express";
import { signup,signin } from "../controllers/auth.js";

const router = express.Router();

//create a user
router.post("/signup", signup);
//signin
router.post("/signin", signin);


export default router;