class ApiError {
    constructor(data) {
        this.code = data.code;
        this.isError = true;
        this.message = data.message;
        this.field = data.field;
        this.value = data.value;
    }
}

module.exports = ApiError;