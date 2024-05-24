"use strict";
// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
// import { ForgotPasswordResponse } from "../model/forgotPasswordResponse";
// import { ForgotPasswordRequest } from "../model/forgotPasswordRequest";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordRepository = void 0;
// export class ForgotPasswordRepository {
//   private client: DynamoDBClient;
//   private docClint: DynamoDBDocumentClient;
//   private tableName: string;
//   constructor(tableName: string) {
//     this.client = new DynamoDBClient({ region: "us-west-2" });
//     this.docClint = DynamoDBDocumentClient.from(this.client);
//     // this.tableName = tableName;
//   }
//   async getDetailByEmail(email: string): Promise<ForgotPasswordResponse> {
//   const command = new GetCommand({
//     TableName: "ng_authorization",
//     Key: {
//       email: email,
//     },
//   });
//     const response: any = await this.docClint.send(command);
//     console.log(response);
//     return response;
//   }
// }
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class ForgotPasswordRepository {
    client;
    docClint;
    tableName;
    constructor(tableName) {
        this.client = new client_dynamodb_1.DynamoDBClient({ region: "us-west-2" });
        this.docClint = lib_dynamodb_1.DynamoDBDocumentClient.from(this.client);
        // this.tableName = tableName;
    }
    async getDetailByEmail(email) {
        const command = new lib_dynamodb_1.GetCommand({
            TableName: "ng_authorization",
            Key: {
                email: email
            },
        });
        const response = await this.docClint.send(command);
        console.log(response.Item.email);
        return response;
    }
}
exports.ForgotPasswordRepository = ForgotPasswordRepository;
//# sourceMappingURL=forgotPasswordRepository.js.map