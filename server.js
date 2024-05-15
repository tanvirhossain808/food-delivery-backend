import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"



//app config

const app = express()
const port = process.env.post || 8081


//middleware

app.use(express.json())
app.use(cors())

//db connection

connectDB()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.get("/", (req, res) => {
    res.send("Testing server")
})
app.use("/api/user", userRouter)

app.listen(port, () => {
    console.log(`Server is runnindg http://localhose:${port}`)
})


