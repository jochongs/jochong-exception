const Exception = require('./Exception');

class ConflictException extends Exception {
    constructor(err, message, defaultMessageOption) {
        if (defaultMessageOption) {
            message = 'Conflict' + message ? `: ${message}` : '';
        }

        super(409, 'Conflict', message, err);
    }
}

module.exports = ConflictException;
