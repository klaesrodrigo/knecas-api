import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from 'src/entities/repository.entity';
import { Audio, AudioDocument } from './audio.schema';

@Injectable()
export class AudioRepository extends Repository<AudioDocument> {
  constructor(@InjectModel(Audio.name) private entity: Model<AudioDocument>) {
    super(entity);
  }
}
