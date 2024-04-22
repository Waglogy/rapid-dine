class ApiResponse {
    constructor(statusCode, data, message, success = true) {
        this.statusCode = statusCode
        this.message = message
        this.success = success
        this.data = data
    }
}
module.exports = ApiResponse
