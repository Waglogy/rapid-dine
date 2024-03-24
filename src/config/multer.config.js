const multer = require("multer")
const path = require("path")
const ApiError = require("../utils/ApiError")
const { StatusCodes, getReasonPhrase } = require("http-status-codes")

module.exports = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
            cb(
                new ApiError(
                    StatusCodes.UNSUPPORTED_MEDIA_TYPE,
                    getReasonPhrase(StatusCodes.UNSUPPORTED_MEDIA_TYPE)
                ),
                false
            )
            return
        }
        cb(null, true)
    },
})
