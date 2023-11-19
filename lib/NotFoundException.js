const Exception = require('./Exception');

class NotFoundException extends Exception {
    /**
     * @param {import('../index.d.ts').Err} err 
     * @param {string} message 
     * @param {boolean} defaultMessageOption 
     */
    constructor(err, message, defaultMessageOption = true, response = {}) {
        if (defaultMessageOption) {
            message = 'Not found' + (message ? `: ${message}` : '');
        }

        super(404, 'Not Found', message, err, response);
    }
}

module.exports = NotFoundException;
