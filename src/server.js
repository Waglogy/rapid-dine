const config = require("./config/environment.config")
const connectDB = require("./db/conn")
const { app } = require("./app")

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.info("ERROR: " + error)
            throw error
        })
        app.listen(config.PORT || process.env.PORT, () => {
            console.info("Server is listening")
        })
    })
    .catch((err) => {
        console.error("MongoDB connection FAILED !!!" + err)
    })
