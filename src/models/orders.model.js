const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
        items: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Item",
            },
        ],
        status: {
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

const Order = mongoose.Model("Order", orderSchema)

module.exports = { Order }
