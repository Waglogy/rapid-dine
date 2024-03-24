const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema(
    {
        itemsServed: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Item",
            },
        ],
        tableNo: {
            type: Number,
            required: true,
        },
        qrImage: {
            imageUrl: {
                type: String,
                required: true,
            },
            imageId: {
                type: String,
                required: true,
            },
        },
    },
    {
        timestamps: true,
    }
)

const Table = mongoose.Model("Table", tableSchema)

module.exports = { Table }
