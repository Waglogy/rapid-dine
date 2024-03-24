const { z } = require("zod")

const itemSchema = z.object({
    itemName: z
        .string({
            required_error: "Item name is required",
        })
        .min(3, {
            message: "Item name is too short",
        })
        .max(255)
        .trim(),
    description: z
        .string({
            required_error: "Description is required",
        })
        .min(0)
        .max(255)
        .trim(),
    price: z
        .number({
            required_error: "Price is required",
        })
        .min(0),
    hidden: z.boolean({
        required_error: "Hidden is required",
    }),
    category: z
        .string({
            required_error: "Category is required",
        })
        .min(3)
        .max(255),
})

module.exports = { itemSchema }
