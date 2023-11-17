const Exception = require('./Exception');

class ForbiddenException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Permission denied' + (message ? `: ${message}` : '');
        }

        super(403, 'Forbidden', message, err);
    }
}

module.exports = ForbiddenException;
