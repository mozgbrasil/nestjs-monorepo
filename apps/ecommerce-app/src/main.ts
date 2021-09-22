import { NestFactory } from '@nestjs/core';
import { EcommerceAppModule } from './ecommerce-app.module';

async function bootstrap() {
  const app = await NestFactory.create(EcommerceAppModule);
  await app.listen(3000);
}
bootstrap();
