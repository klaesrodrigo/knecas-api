import { Injectable } from '@nestjs/common';
import { Bucket } from 'src/helpers/bucket';
import { AudioRepository } from './audio.repository';
import { CreateAudioDto } from './dto/create-audio.dto';
import { UpdateAudioDto } from './dto/update-audio.dto';

@Injectable()
export class AudioService {
  constructor(
    private readonly bucket: Bucket,
    private readonly audioRepository: AudioRepository,
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
    return this.audioRepository.create({
      url: response.Location,
      key: response.Key,
      bucket: response.Bucket,
      eTag: response.ETag,
    });
  }
}
