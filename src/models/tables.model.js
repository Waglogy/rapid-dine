const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema(
    {
        tableNo: {
            type: Number,
            required: true,
        },
        QRCode: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Table = mongoose.model("Table", tableSchema)

module.exports = { Table }
