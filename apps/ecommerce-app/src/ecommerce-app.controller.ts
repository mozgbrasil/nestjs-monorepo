import { Controller, Get } from '@nestjs/common';
import { EcommerceAppService } from './ecommerce-app.service';

@Controller()
export class EcommerceAppController {
  constructor(private readonly ecommerceAppService: EcommerceAppService) {}

  @Get()
  getHello(): string {
    return this.ecommerceAppService.getHello();
  }
}
