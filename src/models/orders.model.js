const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Item",
            },
        ],
        completeStatus: {
            type: Boolean,
            default: false,
        },
        tableId: {
            type: mongoose.Types.ObjectId,
            ref: "Table",
        },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model("Order", orderSchema)

module.exports = { Order }
