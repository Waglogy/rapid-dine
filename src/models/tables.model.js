import mongoose from 'mongoose'

const tableSchema = new mongoose.Schema(
    {
        itemsServed: [
            {
                type: mongoose.Types.ObjectId,
                ref: 'Item',
            },
        ],
        tableNo: {
            type: Number,
            required: true,
        },
        qrImage: {
            type: {
                imageUrl: {
                    type: String,
                    required: true,
                },
                imageId: {
                    type: String,
                    required: true,
                },
            },
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const Table = mongoose.Model('Table', tableSchema)
