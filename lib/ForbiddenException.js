const Exception = require('./Exception');

class ForbiddenException extends Exception {
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Permission denied' + message ? `: ${message}` : '';
        }

        super(403, 'Forbidden', message, err);
    }
}

module.exports = ForbiddenException;
