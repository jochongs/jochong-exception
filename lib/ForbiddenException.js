const Exception = require('./Exception');

class ForbiddenException extends Exception {
    constructor(message, err) {
        super(403, 'Forbidden', message, err);
    }
}

module.exports = ForbiddenException;
