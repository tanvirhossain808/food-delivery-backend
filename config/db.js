import mongoose from "mongoose";

export const connectDB = async () => {
    console.log("hey");
    await mongoose.connect('mongodb+srv://tanvirhossan528:c2NmCS93HUJmefze@cluster0.i3lywhp.mongodb.net/foodDelivery')
        .then(() => console.log('db conncected'))
}