const { Exception } = require('./Exception');

class BadRequestException extends Exception {
    constructor(message, defaultMessage = true, err) {
        if (defaultMessage) {
            message = message + ' 형식이 유효하지 않습니다.';
        }

        super(400, 'Bad Request', message, err);
    }
}

module.exports = BadRequestException;
