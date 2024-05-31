import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

export class ForgotPasswordRepository {
  private client: DynamoDBClient;
  private docClint: DynamoDBDocumentClient;
  private tableName: string;

  constructor(tableName: string) {
    this.client = new DynamoDBClient({ region: "us-west-2" });
    this.docClint = DynamoDBDocumentClient.from(this.client);
  }

  async getDetailByEmail(email: string): Promise<any> {

   const command = new GetCommand({
     TableName: "ng_authorization",
     Key: {
       email : email
     },
   });

   const response: any = await this.docClint.send(command);
   return response;
 }
}
