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
      return responseBuilder.badRequest("Invalid Email Address");
    }

    const data = await forgotPasswordService.getDetailByEmail(queryParameter);
    if (data.Item.email === queryParameter) {
      // return responseBuilder.success({ email: data.item.email }, 200);
      console.log(data.Item.email);
    }
    return responseBuilder.notFound("User not found");
  } catch (error) {
    return responseBuilder.internalServerError("Internal Server Error");
  }
};

handler("hello");