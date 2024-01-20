const Exception = require('./Exception');

class InternalServerErrorException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err) {
        super(500, message, err);
    }
}

module.exports = InternalServerErrorException;
