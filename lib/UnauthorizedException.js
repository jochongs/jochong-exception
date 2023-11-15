const Exception = require('./Exception');

class UnauthorizedException extends Exception {
    constructor(message, defaultMessageOption = true, err) {
        if (defaultMessageOption) {
            message = 'Token expired or not available';
        }

        super(401, 'Unauthorized', message, err);
    }
}

module.exports = UnauthorizedException;
