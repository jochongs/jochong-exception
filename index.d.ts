type Err = any;

export class Exception {
    constructor(status: number, response: any, err?: Err);

    public err: Err | null;
    public status: number;
    public response: any;
}

export class BadRequestException extends Exception {
    constructor(message: string, err?: Err);
}

export class UnauthorizedException extends Exception {
    constructor(message: string, err?: Err);
}

export class ForbiddenException extends Exception {
    constructor(message: string, err?: Err);
}

export class NotFoundException extends Exception {
    constructor(message: string, err?: Err);
}

export class ConflictException extends Exception {
    constructor(message: string, err?: Err);
}

export class InternalServerErrorException extends Exception {
    constructor(message: string, err?: Err);
}

export class HttpException extends Exception {
    constructor(status: number, message: string, err?: Err);
}
