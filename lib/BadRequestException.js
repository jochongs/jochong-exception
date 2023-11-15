const Exception = require('./Exception');

class BadRequestException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Invalid variable' + message ? `: ${message}` : '';
        }

        super(400, 'Bad Request', message, err);
    }
}

module.exports = BadRequestException;
