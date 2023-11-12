class Exception {
    err;
    status;
    name;
    message;

    constructor(status, name, message, err) {
        this.status = status;
        this.name = name;
        this.message = message;
        this.err = err;
    }
}

module.exports = Exception;
