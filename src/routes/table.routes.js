const {
    addTableController,
    getTablesController,
} = require("../controllers/table.controller")

const tableRoute = require("express").Router()

// POST Route.

tableRoute.route("/add").post(addTableController)

// GET all tables.

tableRoute.route("/").get(getTablesController)

module.exports = { tableRoute }
