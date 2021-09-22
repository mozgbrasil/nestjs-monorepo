import { Test, TestingModule } from '@nestjs/testing';
import { EcommerceAppController } from './ecommerce-app.controller';
import { EcommerceAppService } from './ecommerce-app.service';

describe('EcommerceAppController', () => {
  let ecommerceAppController: EcommerceAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EcommerceAppController],
      providers: [EcommerceAppService],
    }).compile();

    ecommerceAppController = app.get<EcommerceAppController>(EcommerceAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ecommerceAppController.getHello()).toBe('Hello World!');
    });
  });
});
