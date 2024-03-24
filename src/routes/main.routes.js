const mainRoute = require("express").Router()
const { itemRoute } = require("./item.routes")

mainRoute.use("/item", itemRoute)

module.exports = { mainRoute }
