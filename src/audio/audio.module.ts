import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { MulterModule } from '@nestjs/platform-express';
import { Bucket } from 'src/helpers/bucket';
import * as multer from 'multer';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: multer.diskStorage({
          destination: function (req, file, cb) {
            cb(null, 'upload/');
          },
          filename: function (req, file, cb) {
            cb(null, file.originalname);
          },
        }),
      }),
    }),
  ],
  controllers: [AudioController],
  providers: [AudioService, Bucket],
})
export class AudioModule {}
