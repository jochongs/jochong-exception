class Exception {
    err;
    status;
    response;

    /**
     *
     * @param {number} status status code
     * @param {string} response
     * @param {import('../index.d.ts').Err} err
     */
    constructor(status, response, err = null) {
        this.status = status;
        this.err = err;

        if (typeof response === 'string') {
            this.response = {
                message: response,
            };
        } else {
            this.response = response;
        }
    }
}

module.exports = Exception;
