import { Injectable } from '@nestjs/common';
import { IQRCodeService } from './qrcode.entity';
import * as QRCode from 'qrcode';

@Injectable()
export class QRCodeService implements IQRCodeService {
  private readonly qrCode;
  constructor() {
    this.qrCode = QRCode;
  }

  async generate(url: string) {
    try {
      console.log(await this.qrCode.toDataURL(url));
    } catch (err) {
      console.error(err);
    }
  }
}
