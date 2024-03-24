const dotenv = require("dotenv")
const path = require("path")

dotenv.config({
    path: path.resolve(`.env.${process.env.NODE_ENV}`),
})

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT,
}
