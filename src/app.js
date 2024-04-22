require("dotenv").config()
const express = require("express")
const path = require("path")
const helmet = require("helmet")
const cors = require("cors")

// import modules

const { mainRoute } = require("./routes/main.routes")
const { StatusCodes } = require("http-status-codes")
const ApiError = require("./utils/ApiError")

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
    if (err instanceof ApiError)
        res.status(err.statusCode).json({
            status: false,
            message: err.message,
        })
    else
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
        })
})

module.exports = { app }
