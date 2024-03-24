const config = require("./config/config")
const connectDB = require("./db/conn")
const { app } = require("./app")

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.info("ERROR: " + error)
            throw error
        })
        app.listen(config.PORT, () => {
            console.info(`Server is listening at port: ${config.PORT}`)
        })
    })
    .catch((err) => {
        console.error("mongoDB connection FAILED !!!" + err)
    })
