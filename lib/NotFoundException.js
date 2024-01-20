const Exception = require('./Exception');

class NotFoundException extends Exception {
    /**
     * @param {string} message
     * @param {import('../index.d.ts').Err} err
     */
    constructor(message, err = null) {
        super(404, message, err);
    }
}

module.exports = NotFoundException;
