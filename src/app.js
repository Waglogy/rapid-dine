require("dotenv").config()
const express = require("express")
const path = require("path")
const helmet = require("helmet")

// import modules

const { mainRoute } = require("./routes/main.routes")
const { StatusCodes } = require("http-status-codes")

const app = express()

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
)
app.use(helmet())
app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// main route middleware

app.use("/api", mainRoute)

app.use((err, req, res, next) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: err.message,
    })
})

module.exports = { app }
