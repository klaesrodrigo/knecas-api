describe('ProductController (e2e)', () => {
  describe('/product (GET)', () => {
    it('should return a list of products', () => {
      return global.testRequest
        .get('/product')
        .expect(200)
        .expect('This action returns all product');
    });
  });
});
