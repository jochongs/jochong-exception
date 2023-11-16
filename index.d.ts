type Err = any

export class Exception {
    constructor(status: number, name: string, message: string, err: Err)

    err: Err;
    status: number;
    message: string;
    name: string;
}

export class BadRequestException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}

export class UnauthorizedException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}

export class ForbiddenException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}

export class NotFoundException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}

export class ConflictException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}

export class InternalServerErrorException extends Exception {
    constructor(err: Err, message?: string, defaultMessageOption?: boolean);
}
