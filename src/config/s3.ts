import { ConfigService } from '@nestjs/config';
import * as AWS from 'aws-sdk';

export class S3 {
  private readonly config: AWS.S3;

  constructor() {
    this.config = new AWS.S3({ apiVersion: '2006-03-01' });
  }

  public getConfig(
    region: string,
    accessKeyId: string,
    secretAccessKey: string,
  ): AWS.S3 {
    this.config.config.update({
      region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
    return this.config;
  }
}
