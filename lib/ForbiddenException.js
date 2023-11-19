const Exception = require('./Exception');

class ForbiddenException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true, response = {}) {
        if (defaultMessageOption) {
            message = 'Permission denied' + (message ? `: ${message}` : '');
        }

        super(403, 'Forbidden', message, err, response);
    }
}

module.exports = ForbiddenException;
