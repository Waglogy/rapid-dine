const { StatusCodes } = require("http-status-codes")

const { fromZodError } = require("zod-validation-error") // Import the fromZodError function from the errorHandler.js file in the utils folder

const schemaValidator = (schema) => async (req, res, next) => {
    try {
        const body = await schema.parseAsync(req.body)
        req.body = body
        next()
    } catch (err) {
        // const error_message = []
        // for (let index = 0; index < err.errors.length; index++) {
        //     const element = err.errors[index].message
        //     error_message.push(element)
        // }

        const validationError = fromZodError(err)

        res.status(StatusCodes.BAD_REQUEST).json({
            error: validationError.details,
            status: false,
        })
    }
}

module.exports = schemaValidator
