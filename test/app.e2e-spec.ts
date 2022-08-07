describe('AppController (e2e)', () => {
  it('/ (GET)', () => {
    return global.testRequest.get('/').expect(200).expect('Hello World!');
  });
});
