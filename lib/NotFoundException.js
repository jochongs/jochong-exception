const Exception = require('./Exception');

class NotFoundException extends Exception {
    constructor(err, message, defaultMessageOption) {
        if (defaultMessageOption) {
            message = 'Not found' + message ? `: ${message}` : '';
        }

        super(404, 'Not Found', message, err);
    }
}

module.exports = NotFoundException;
