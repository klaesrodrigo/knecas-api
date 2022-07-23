import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AudioDocument = Audio & Document;

@Schema()
export class Audio {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  key: string;

  @Prop()
  bucket: string;

  @Prop()
  eTag: string;
}

export const AudioSchema = SchemaFactory.createForClass(Audio);
