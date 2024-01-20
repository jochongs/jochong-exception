const Exception = require('./Exception');

class UnauthorizedException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err) {
        super(401, message, err);
    }
}

module.exports = UnauthorizedException;
