const { addItems, getAllItems } = require("../controllers/item.controller")
const multer = require("../config/multer.config")

const itemRoute = require("express").Router()

itemRoute
    .route("/add")
    .post(multer.single("image"), schemaValidator(itemSchema), addItems)

itemRoute.route("/all").get(getAllItems)

module.exports = { itemRoute }
