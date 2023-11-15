const Exception = require('./Exception');

class UnauthorizedException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Token expired or not available' + message ? `: ${message}` : '';
        }

        super(401, 'Unauthorized', message, err);
    }
}

module.exports = UnauthorizedException;
