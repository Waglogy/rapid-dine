const { StatusCodes } = require("http-status-codes")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { imageUploader } = require("../utils/imageHandler")
const ApiError = require("../utils/ApiError")
const { ItemsModel } = require("../models/items.model")
const ApiResponse = require("../utils/ApiResponse")

const addItems = asyncErrorHandler(async (req, res) => {
    const { itemName, description, price, category } = req.body
    if (!req.file)
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            "Please upload an image of the item"
        )
    const image = await imageUploader(req.file.path, "items")

    // Save the item to the database
    const numberdPrice = Number(price)
    await ItemsModel.create({
        image: {
            imageUrl: image.secure_url,
            imageId: image.public_id,
        },
        itemName,
        description,
        price: numberdPrice,
        category,
    })

    res.status(StatusCodes.CREATED).json({
        success: true,
        message: "Item added successfully",
    })
})

const getAllItems = asyncErrorHandler(async (req, res) => {
    const items = await ItemsModel.find()
    res.status(StatusCodes.OK).json(
        new ApiResponse(StatusCodes.OK, items, "Items retrieved successfully")
    )
})

module.exports = { addItems, getAllItems }
