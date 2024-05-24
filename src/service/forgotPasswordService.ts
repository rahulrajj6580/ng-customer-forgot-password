
import { ForgotPasswordRequest } from "../model/forgotPasswordRequest";
import { ForgotPasswordRepository } from "../repository/forgotPasswordRepository";

export class ForgotPasswordService{
private forgotPasswordRepository :ForgotPasswordRepository;

constructor(forgotPasswordRepository :ForgotPasswordRepository){
this.forgotPasswordRepository=forgotPasswordRepository;
}

async getDetailByEmail(email:string):Promise<any>{
return await this.forgotPasswordRepository.getDetailByEmail(email);

}
}
