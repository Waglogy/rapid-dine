const express = require("express")
const cors = require("cors")
const path = require("path")

// import modules

const { mainRoute } = require("./routes/main.routes")

const app = express()

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

// main route middleware

app.use("/api", mainRoute)

module.exports = { app }
