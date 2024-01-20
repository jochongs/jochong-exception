const Exception = require('./Exception');

class BadRequestException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err = null) {
        super(400, message, err);
    }
}

module.exports = BadRequestException;
