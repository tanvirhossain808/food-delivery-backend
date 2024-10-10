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
const port = 3000

//middleware

app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

//db connection

// connectDB()
//     .then(() => {
//         app.listen(port, () => {
//             try {
//                 console.log(`Server is running http://localhose:${port}`)
//             } catch (error) {
//                 console.log(error)
//             }
//         })
//     })
// .catch((err) => console.log(err))

//api endpoints
// app.use("/api/food", foodRouter)
// app.use("/images", express.static("uploads"))
// app.use("/api/user", userRouter)
// app.use("/api/cart", cartRouter)
// app.use("/api/order", orderRouter)

app.use("/", (req, res) => {
    res.send("Testing server")
})

// export default app
app.listen(port, () => {
    // try {
    //     console.log(`Server is running http://localhose:${port}`)
    // } catch (error) {
    //     console.log(error)
    // }
    console.log("server is ready")
})
