const asyncErrorHandler = require("../utils/asyncErrorHandler")

const addItems = asyncErrorHandler(async (req, res) => {
    const { itemName, description, price, hidden, category } = req.body
    const file = req.file
})

module.exports = { addItems }
