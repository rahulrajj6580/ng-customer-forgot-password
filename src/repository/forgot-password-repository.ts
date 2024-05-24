// import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
// import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
// import { ForgotPasswordResponse } from "../model/forgotPasswordResponse";
// import { ForgotPasswordRequest } from "../model/forgotPasswordRequest";


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


import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export class ForgotPasswordRepository {
  private client: DynamoDBClient;
  private docClint: DynamoDBDocumentClient;
  private tableName: string;

  constructor(tableName: string) {
    this.client = new DynamoDBClient({ region: "us-west-2" });
    this.docClint = DynamoDBDocumentClient.from(this.client);
    // this.tableName = tableName;
  }

  async getDetailByEmail(email: string): Promise<any> {

   const command = new GetCommand({
     TableName: "ng_authorization",
     Key: {
       email : email
     },
   });

   const response: any = await this.docClint.send(command);
   console.log(response.Item.email);
   return response;
 }
}
