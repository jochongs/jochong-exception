const Exception = require('./Exception');

class InternalServerErrorException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'An unexpected error occurred' + message ? `: ${message}` : '';
        }

        super(500, 'Internal Server Error', message, err);
    }
}

module.exports = InternalServerErrorException;
