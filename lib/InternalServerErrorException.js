const Exception = require('./Exception');

class InternalServerErrorException extends Exception {
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'An unexpected error occurred' + message ? `: ${message}` : '';
        }

        super(500, 'Internal Server Error', message, err);
    }
}

module.exports = InternalServerErrorException;
