const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

const imageUploader = async (...image_details) => {
    try {
        const [image_path, folder] = image_details
        const result = await cloudinary.uploader.upload(image_path, {
            folder: `${process.env.CLOUDINARY_FOLDER_NAME}/${folder}`,
        })
        return result
    } catch (error) {
        next(error)
    }
}

module.exports = {
    imageUploader,
}
