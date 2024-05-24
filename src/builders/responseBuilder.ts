export class ResponseBuilder {
    success(data: any, statusCode: number): any {
      return {
        statusCode,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:4200",
        },
      };
    }
  
    badRequest(message: string): any {
      return this.success({ message }, 400);
    }
  
    notFound(message: string): any {
      return this.success({ message }, 404);
    }
  
    internalServerError(message: string): any {
      return this.success({ message }, 500);
    }
  }
  