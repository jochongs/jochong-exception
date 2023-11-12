const Exception = require('./Exception');

class ConflictException extends Exception {
    constructor(message, err) {
        super(409, 'Conflict', message, err);
    }
}

module.exports = ConflictException;
