import { Injectable } from '@nestjs/common';
import { Bucket } from '../helpers/bucket';
import { QRCodeService } from '../qrcode/qrcode.service';
import { AudioRepository } from './audio.repository';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Injectable()
export class AudioService {
  constructor(
    private readonly bucket: Bucket,
    private readonly audioRepository: AudioRepository,
    private readonly qrCode: QRCodeService,
  ) {}
  create(createAudioDto: CreateAudioDto) {
    return 'This action adds a new audio';
  }

  findAll() {
    return `This action returns all audio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} audio`;
  }

  update(id: number, updateAudioDto: UpdateAudioDto) {
    return `This action updates a #${id} audio`;
  }

  remove(id: number) {
    return `This action removes a #${id} audio`;
  }

  async uploadFile(file: Express.Multer.File) {
    const response = await this.bucket.uploadFile(file);
    await this.qrCode.generate(response.Location);
    return this.audioRepository.create({
      url: response.Location,
      key: response.Key,
      bucket: response.Bucket,
      eTag: response.ETag,
    });
  }
}
