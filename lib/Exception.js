class Exception {
    err;
    status;
    name;
    response;

    /**
     *
     * @param {number} status status code
     * @param {string} name status name
     * @param {string} response
     * @param {import('../index.d.ts').Err} err
     */
    constructor(status, name, message, err) {
        this.status = status;
        this.name = name;
        this.err = err;
        this.response = message;

        if (typeof message === 'string') {
            this.response = { message };
        }
    }
}

module.exports = Exception;
