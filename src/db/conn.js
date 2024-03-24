const mongoose = require("mongoose")
const config = require("../config/environment.config.js")

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${config.MONGO_URI}`)
        console.info(
            `MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`
        )
    } catch (error) {
        console.error("MongoDB connection error : " + error)
        process.exit(1)
    }
}

module.exports = connectDB
