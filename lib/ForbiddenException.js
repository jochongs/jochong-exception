const Exception = require('./Exception');

class ForbiddenException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err = null) {
        super(403, message, err);
    }
}

module.exports = ForbiddenException;
