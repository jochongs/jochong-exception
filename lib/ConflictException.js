const Exception = require('./Exception');

class ConflictException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err) {
        super(409, message, err);
    }
}

module.exports = ConflictException;
