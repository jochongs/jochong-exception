const Exception = require('./Exception');

class ConflictException extends Exception {
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Conflict' + message ? `: ${message}` : '';
        }

        super(409, 'Conflict', message, err);
    }
}

module.exports = ConflictException;
