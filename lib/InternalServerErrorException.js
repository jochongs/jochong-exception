const { Exception } = require('./Exception');

class InternalServerErrorException extends Exception {
    constructor(message, err) {
        super(500, 'Internal Server Error', message, err);
    }
}

module.exports = InternalServerErrorException;
