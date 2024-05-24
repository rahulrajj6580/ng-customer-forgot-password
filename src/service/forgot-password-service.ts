import { ForgotPasswordRequest } from "../model/forgot-password-request";
import { ForgotPasswordRepository } from "../repository/forgot-password-repository";

export class ForgotPasswordService {
  private forgotPasswordRepository: ForgotPasswordRepository;

  constructor(forgotPasswordRepository: ForgotPasswordRepository) {
    this.forgotPasswordRepository = forgotPasswordRepository;
  }

  async getDetailByEmail(email: string): Promise<any> {
    return await this.forgotPasswordRepository.getDetailByEmail(email);
  }
}
