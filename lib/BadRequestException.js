const Exception = require('./Exception');

class BadRequestException extends Exception {
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Invalid variable' + message ? `: ${message}` : '';
        }

        super(400, 'Bad Request', message, err);
    }
}

module.exports = BadRequestException;
