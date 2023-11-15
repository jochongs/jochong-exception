const Exception = require('./Exception');

class BadRequestException extends Exception {
    constructor(message, defaultMessageOption = true, err) {
        if (defaultMessageOption) {
            message = 'Invalid variable: ' + message;
        }

        super(400, 'Bad Request', message, err);
    }
}

module.exports = BadRequestException;
