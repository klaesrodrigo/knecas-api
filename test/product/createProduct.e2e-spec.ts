import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { assert } from 'console';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/product (POST)', () => {
    const body: CreateProductDto = {
      name: 'Caneca 1',
      description: 'Uma linda caneca',
      price: 50,
    };
    return request(app.getHttpServer())
      .post('/product')
      .send(body)
      .expect(201)
      .then((response) => {
        assert(response.body.name, body.name);
      });
  });
});
