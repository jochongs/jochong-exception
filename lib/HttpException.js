const Exception = require('./Exception');

class HttpException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(status, message, err = null) {
        super(status, message, err);
    }
}

module.exports = HttpException;
