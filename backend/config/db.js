import mongoose from "mongoose";

export const connectDB = async () => {
await mongoose.connect("mongodb+srv://luneria444:56789012@cluster0.6q62bcb.mongodb.net/food-del").then(() => console.log("DB Connected"));
}