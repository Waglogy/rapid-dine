const ApiError = require("../utils/ApiError")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { StatusCodes } = require("http-status-codes")
const Order = require("../models/orders.model.js")
const ApiResponse = require("../utils/ApiResponse")

const placeOrder = asyncErrorHandler(async (req, res) => {
    const { items } = req.body
    const { tableId } = req.params

    if (!items) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Order cannot be empty")
    }
    if (!tableId) {
        throw new ApiError(StatusCodes.BAD_REQUEST, "Not a valid table")
    }
    const createdOrder = await Order.create({
        items,
        completeStatus: false,
        tableId,
    })
    if (!createdOrder) {
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            "There was an error while creatin the order"
        )
    }
    res.status(StatusCodes.CREATED).json(
        new ApiResponse(200, createdOrder, "Order Created")
    )
})

const toggleCompleteStatus = asyncErrorHandler(async (req, res) => {
    const { orderId } = req.params
    const searchUser = await Order.findOne({ _id: orderId })
    if (!searchUser) {
        throw new ApiError(404, "Order not found")
    }
    const toggledCompleteStatus = searchUser.completeStatus ? false : true
    const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        {
            $set: { completeStatus: toggledCompleteStatus },
        },
        {
            new: true,
        }
    )
    if (!updatedOrder) {
        throw new ApiError(500, "Couldnt update complete status")
    }
    return res
        .status(StatusCodes.CREATED)
        .json(
            new ApiResponse(
                200,
                updatedOrder.completeStatus,
                "Toggled complete status"
            )
        )
})

module.exports = {placeOrder, toggleCompleteStatus}