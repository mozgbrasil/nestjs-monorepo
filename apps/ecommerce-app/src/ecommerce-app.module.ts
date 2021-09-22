import { Module } from '@nestjs/common';
import { EcommerceAppController } from './ecommerce-app.controller';
import { EcommerceAppService } from './ecommerce-app.service';

@Module({
  imports: [],
  controllers: [EcommerceAppController],
  providers: [EcommerceAppService],
})
export class EcommerceAppModule {}
