class Exception {
    err;
    status;
    name;
    message;

    /**
     * 
     * @param {number} status status code
     * @param {string} name status name
     * @param {string} message 
     * @param {import('../index.d.ts').Err} err 
     */
    constructor(status, name, message, err) {
        this.status = status;
        this.name = name;
        this.message = message;
        this.err = err;
    }
}

module.exports = Exception;
