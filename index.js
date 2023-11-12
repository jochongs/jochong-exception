class Exception {
    err;
    status;
    message;

    constructor(err) {
        this.err = err;
    }
}

module.exports = {
    Exception
};
