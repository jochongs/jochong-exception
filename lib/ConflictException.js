const Exception = require('./Exception');

class ConflictException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err
     * @param {string} message
     * @param {boolean} defaultMessageOption
     */
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption && typeof message === 'string') {
            message = 'Conflict' + (message ? `: ${message}` : '');
        }

        super(409, 'Conflict', message, err);
    }
}

module.exports = ConflictException;
