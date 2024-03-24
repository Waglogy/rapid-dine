const multer = require("../config/multer.config")
const schemaValidator = require("../middlewares/schemaValidator.middleware")
const { itemSchema } = require("../utils/validator/item.validator")
const { addItems, getAllItems } = require("../controllers/item.controller")

const itemRoute = require("express").Router()

itemRoute
    .route("/add")
    .post(multer.single("image"), schemaValidator(itemSchema), addItems)

itemRoute.route("/all").get(getAllItems)

module.exports = { itemRoute }
