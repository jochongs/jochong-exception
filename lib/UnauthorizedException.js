const Exception = require('./Exception');

class UnauthorizedException extends Exception {
    constructor(message, err) {
        super(401, 'Unauthorized', message, err);
    }
}

module.exports = UnauthorizedException;
