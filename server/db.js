import mongoose from "mongoose";

const connectDB = () => {

    const mongooseConnection = mongoose.connect(process.env.MONGO_URI)

    if (!mongooseConnection) {    
        console.log("ERROR BUILDING CONNECTION WITH DATABASE")
    } else {
        console.log("Connected Successfully")
    }
    
}

export default connectDB