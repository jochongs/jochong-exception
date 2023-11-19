class Exception {
    err;
    status;
    name;
    message;
    response;

    /**
     * 
     * @param {number} status status code
     * @param {string} name status name
     * @param {string} message 
     * @param {import('../index.d.ts').Err} err 
     */
    constructor(status, name, message, err, response = {}) {
        this.status = status;
        this.name = name;
        this.message = message;
        this.err = err;
        this.response = response;
    }
}

module.exports = Exception;
