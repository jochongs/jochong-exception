type Err = any

export class Exception {
    constructor(status: number, name: string, message: string, err: Err, response: object)

    public err: Err;
    public status: number;
    public message: string;
    public name: string;
    public response: object;
}

export class BadRequestException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}

export class UnauthorizedException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}

export class ForbiddenException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}

export class NotFoundException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}

export class ConflictException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}

export class InternalServerErrorException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean, response?: object);
}
