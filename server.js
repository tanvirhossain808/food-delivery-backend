import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import "dotenv/config"
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config

const app = express()
const port = process.env.post || 8081

//middleware

app.use(express.json())
app.use(cors())

//db connection

connectDB()
    .then(() => {
        app.listen(port, () => {
            try {
                console.log(process.env.post, "oi")
                console.log(`Server is running http://localhose:${port}`)
            } catch (error) {
                console.log(error)
            }
        })
    })
    .catch((err) => console.log(err))

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Testing server")
})
