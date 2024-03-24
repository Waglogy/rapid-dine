const { addItems } = require("../controllers/item.controller")
const schemaValidator = require("../middlewares/schemaValidator.middleware")
const { itemSchema } = require("../utils/validator/item.validator")

const itemRoute = require("express").Router()

itemRoute.route("/add").post(schemaValidator(itemSchema), addItems)

module.exports = { itemRoute }
