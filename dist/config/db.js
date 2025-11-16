/** @format */
import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("DB connection successful");
    }
    catch (error) {
        console.error("DB connection error:", error.message);
        process.exit(1);
    }
};
export default dbConnect;
