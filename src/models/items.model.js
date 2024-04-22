const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema(
    {
        image: {
            imageUrl: {
                type: String,
                required: true,
            },
            imageId: {
                type: String,
                required: true,
            },
        },
        itemName: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        hidden: {
            type: Boolean,
            default: false,
        },
        category: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const ItemsModel = mongoose.model("Items", itemSchema)

module.exports = { ItemsModel }
