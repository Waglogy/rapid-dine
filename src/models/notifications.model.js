import mongoose from 'mongoose'

const notificationSchema = new mongoose.Schema(
    {
        status: {
            type: false,
        },
        tableId: {
            type: mongoose.Types.ObjectId,
            ref: 'Table',
        },
    },
    {
        timestamps: true,
    }
)

export const Notifications = mongoose.Model('Notification', notificationSchema)
