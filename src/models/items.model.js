const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema(
    {
        image: {
            //not confirmed
            imageUrl: {
                type: String,
            },
            imageId: {
                type: String,
            },
            required: true,
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
    },
    {
        timestamps: true,
    }
)

const Items = mongoose.Model("Items", itemSchema)

module.exports = { Items }
