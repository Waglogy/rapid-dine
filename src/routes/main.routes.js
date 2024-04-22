const mainRoute = require("express").Router()
const { itemRoute } = require("./item.routes")
const { tableRoute } = require("./table.routes")

mainRoute.use("/item", itemRoute)

mainRoute.use("/table", tableRoute)

module.exports = { mainRoute }
