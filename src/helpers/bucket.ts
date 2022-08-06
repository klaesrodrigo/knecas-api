import { Injectable } from '@nestjs/common';
import { S3 } from '../config/s3';
import { randomUUID } from 'crypto';
import * as path from 'path';
import { readFile } from 'fs/promises';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Bucket {
  constructor(private readonly configService: ConfigService) {}

  public async uploadFile(file: Express.Multer.File) {
    try {
      const client = new S3().getConfig(
        this.configService.get('S3_BUCKET_REGION'),
        this.configService.get('AWS_ACCESS_KEY_ID'),
        this.configService.get('AWS_SECRET_ACCESS_KEY'),
      );
      const fileReaded = await readFile(path.join('./', file.path));
      const resp = await client
        .upload({
          Bucket: this.configService.get('S3_BUCKET_NAME'),
          Key: `${Date.now().toString()} - ${file.originalname}`,
          Body: fileReaded,
          ContentType: file.mimetype,
          ACL: 'public-read',
        })
        .promise();

      return resp;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
