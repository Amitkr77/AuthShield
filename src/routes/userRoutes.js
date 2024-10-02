import express from 'express'
import { verifyToken } from '../middlewares/authMiddleware.js'
import { authorizeRole } from '../middlewares/roleMiddleware.js'


export const userRouter = express()

userRouter.get('/admin',verifyToken,authorizeRole("Admin"),(req,res)=>{
    res.send("Welcome Admin")
})

userRouter.get("/Manager",verifyToken,authorizeRole("Admin","Manager"),(req,res)=>{
    res.send("welcome Manager")
})

userRouter.get("/User",verifyToken,authorizeRole("Admin","Manager","User"),(req,res)=>{
    res.send("welcome User")
})