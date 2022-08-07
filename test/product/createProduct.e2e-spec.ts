import { CreateProductDto } from 'src/product/dto/create-product.dto';

describe('AppController (e2e)', () => {
  it('/product (POST)', () => {
    const body: CreateProductDto = {
      name: 'Caneca 1',
      description: 'Uma linda caneca',
      price: 50,
    };
    return global.testRequest
      .post('/product')
      .send(body)
      .expect(201)
      .then((response) => {
        expect(response.body).toMatchObject(body);
      });
  });
});
