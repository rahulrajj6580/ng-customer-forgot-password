export class ResponseBuilder {
  success(statusCode: number): any {
    const message: string = "email exists";
    console.log(statusCode, message);
    return { statusCode, message };
  }

  badRequest(statusCode: number): any {
    const message: string = "Invalid Email Address";
    console.log(statusCode, message);
    return { message, statusCode };
  }

  notFound(statusCode: number): any {
    const message: string = "User not found";
    console.log(statusCode, message);
    return { message, statusCode };
  }

  internalServerError(statusCode: number): any {
    const message: string = "Internal Server Error";
    console.log(statusCode, message);
    return { message, statusCode };
  }
}
