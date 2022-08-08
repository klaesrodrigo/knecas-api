import { CreateProductDto } from 'src/product/dto/create-product.dto';

describe('ProductController (e2e)', () => {
  const body: CreateProductDto = {
    name: 'Caneca 1',
    description: 'Uma linda caneca',
    price: 50,
  };
  describe('/product (POST)', () => {
    it('should create a product', () => {
      return global.testRequest
        .post('/product')
        .send(body)
        .expect(201)
        .then((response) => {
          expect(response.body).toMatchObject(body);
        });
    });
    it('should return an error when not send a right schema', () => {
      const { name: ommit, ...lessName } = body;
      return global.testRequest
        .post('/product')
        .send(lessName)
        .expect(500)
        .then((response) => {
          console.log(response.body);
          expect(response.body);
        });
    });
  });
});
