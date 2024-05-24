"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordService = void 0;
class ForgotPasswordService {
    forgotPasswordRepository;
    constructor(forgotPasswordRepository) {
        this.forgotPasswordRepository = forgotPasswordRepository;
    }
    async getDetailByEmail(email) {
        return await this.forgotPasswordRepository.getDetailByEmail(email);
    }
}
exports.ForgotPasswordService = ForgotPasswordService;
//# sourceMappingURL=forgot-password-service.js.map