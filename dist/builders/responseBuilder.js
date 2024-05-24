"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseBuilder = void 0;
class ResponseBuilder {
    success(data, statusCode) {
        return {
            statusCode,
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:4200",
            },
        };
    }
    badRequest(message) {
        return this.success({ message }, 400);
    }
    notFound(message) {
        return this.success({ message }, 404);
    }
    internalServerError(message) {
        return this.success({ message }, 500);
    }
}
exports.ResponseBuilder = ResponseBuilder;
//# sourceMappingURL=responseBuilder.js.map