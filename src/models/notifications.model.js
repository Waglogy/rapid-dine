const mongoose = require("mongoose")

const notificationSchema = new mongoose.Schema(
    {
        status: {
            type: false,
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

const Notifications = mongoose.model("Notification", notificationSchema)

module.exports = { Notifications }
