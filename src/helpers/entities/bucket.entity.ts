export interface BucketInterface {
  uploadFile(file: Express.Multer.File): Promise<Express.Multer.File>;
}
