import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDog() {
    return 'Bob';
  }
}
