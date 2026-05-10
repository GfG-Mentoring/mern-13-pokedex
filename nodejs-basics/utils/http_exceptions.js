class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 400;
        this.name = "BadRequestError";
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 401;
        this.name = "UnauthorizedError";
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "NotFoundError";
    }
}

// 500 - Server exceptions
class ServerError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 500;
        this.name = "ServerError";
    }
}

export { BadRequestError, UnauthorizedError, NotFoundError, ServerError };

