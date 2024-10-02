import express from "express";
import { register,login } from "../controllers/controller.js";

export const router = express()

router.post('/register', register)
router.post('/login',login)

