describe('AppController (e2e)', () => {
  it('/product (GET)', () => {
    return global.testRequest
      .get('/product')
      .expect(200)
      .expect('This action returns all product');
  });
});
