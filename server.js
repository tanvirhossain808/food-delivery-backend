import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"




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


app.listen(port, () => {
    console.log(`Server is runnindg http://localhose:${port}`)
})


//mongodb+srv://tanvirhossan528:c2NmCS93HUJmefze@cluster0.i3lywhp.mongodb.net/?

//c2NmCS93HUJmefze