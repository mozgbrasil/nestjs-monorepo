import { Injectable } from '@nestjs/common';

@Injectable()
export class EcommerceAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
