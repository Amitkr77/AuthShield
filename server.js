import express from "express";
import dotenv from "dotenv";
import db from "./src/database/database.js";
import { router } from "./src/routes/AuthRoutes.js";
import { userRouter } from "./src/routes/userRoutes.js";
import config from "./src/config/config.js"

dotenv.config({
    path: "./.env"
})

const app = express()

//Database
db()

//Middleware
app.use(express.json())

//Routes
app.use('/api/auth', router)
app.use('/api/users', userRouter)
app.get('/', (req, res) => {
    res.send('server is running')
})
//Start the server
const Port = config.PORT || 7001
console.log(Port)

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`)
})