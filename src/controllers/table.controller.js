const { Table } = require("../models/tables.model")
const ApiError = require("../utils/ApiError")
const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { StatusCodes } = require("http-status-codes")
const QRCode = require("qrcode")
const ApiResponse = require("../utils/ApiResponse")

const addTableController = asyncErrorHandler(async (req, res) => {
    const { tableNo } = req.body

    const isTableExist = await Table.find({ tableNo })

    if (isTableExist.length != 0)
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            `Table number ${tableNo} already exist`
        )

    if (!tableNo)
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            "Please enter table number of the item"
        )
    const qrcode = await QRCode.toDataURL(
        `${process.env.SITE_URL}?table=${tableNo}`,
        {
            scale: 20,
        }
    )

    if (!qrcode)
        throw new ApiError(
            StatusCodes.BAD_REQUEST,
            "There is an error while generating QR Code. Please try again later."
        )

    Table.create({
        tableNo,
        QRCode: qrcode,
    })

    res.status(StatusCodes.OK).json(
        new ApiResponse(StatusCodes.OK, "Table created successfully")
    )
})

const getTablesController = asyncErrorHandler(async (req, res) => {
    const tables = await Table.find({})

    if (tables.length === 0 || tables === null)
        return res.status(404).json({
            success: false,
            message: "No tables found.",
        })
    res.status(StatusCodes.OK).json(
        new ApiResponse(200, tables, "Tables fetched successfully.")
    )
})

module.exports = {
    addTableController,
    getTablesController,
}
