import { Injectable } from '@nestjs/common';
import { Product } from '@sc-sport-is-awesome/domain';

@Injectable()
export class AppService {
  getData(): Product[] {
    return [];
  }
}
