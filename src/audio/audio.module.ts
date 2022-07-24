import { Module } from '@nestjs/common';
import { AudioService } from './audio.service';
import { AudioController } from './audio.controller';
import { MulterModule } from '@nestjs/platform-express';
import { Bucket } from 'src/helpers/bucket';
import * as multer from 'multer';
import { MongooseModule } from '@nestjs/mongoose';
import { Audio, AudioSchema } from './audio.schema';
import { AudioRepository } from './audio.repository';
import { QRCodeService } from 'src/qrcode/qrcode.service';

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
    MongooseModule.forFeature([{ name: Audio.name, schema: AudioSchema }]),
  ],
  controllers: [AudioController],
  providers: [AudioService, Bucket, AudioRepository, QRCodeService],
})
export class AudioModule {}
