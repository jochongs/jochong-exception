const { Exception } = require('..');

class NotFoundException extends Exception {
    constructor(message, err) {
        super(404, 'Not Found', message, err);
    }
}

module.exports = NotFoundException;