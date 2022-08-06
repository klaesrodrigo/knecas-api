import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Repository } from '../entities/repository.entity';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductRepository extends Repository<ProductDocument> {
  constructor(
    @InjectModel(Product.name) private entity: Model<ProductDocument>,
  ) {
    super(entity);
  }
}
