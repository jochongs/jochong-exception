const Exception = require('./Exception');

class UnauthorizedException extends Exception {
    constructor(err, message, defaultMessageOption = true) {
        if (defaultMessageOption) {
            message = 'Token expired or not available' + message ? `: ${message}` : '';
        }

        super(401, 'Unauthorized', message, err);
    }
}

module.exports = UnauthorizedException;
