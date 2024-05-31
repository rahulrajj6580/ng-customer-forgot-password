import { ForgotPasswordService } from "../service/forgot-password-service";
import { EmailValidator } from "../validators/email-validator";
import { ResponseBuilder } from "../builders/responseBuilder";
import { ForgotPasswordRepository } from "../repository/forgot-password-repository";

const customerTableName = "ForgotPasswordResponse";
const forgotPasswordRepository = new ForgotPasswordRepository(
  customerTableName
);
const forgotPasswordService = new ForgotPasswordService(
  forgotPasswordRepository
);
const emailValidator = new EmailValidator();
const responseBuilder = new ResponseBuilder();

export const handler = async (event) => {
  try {
    const queryParameter = "stevejobs@gmail.com";
    if (!emailValidator.isValidEmail(queryParameter)) {
      return responseBuilder.badRequest(400);
    }
    const data = await forgotPasswordService.getDetailByEmail(queryParameter);
    if (data.Item.email === queryParameter) {
      return responseBuilder.success(200);
    }
    return responseBuilder.notFound(404);
  } catch (error) {
    return responseBuilder.internalServerError(500);
  }
};

handler("test");
