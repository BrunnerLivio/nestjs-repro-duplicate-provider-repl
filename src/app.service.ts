import { Injectable } from '@nestjs/common';
import { AppService as App2Service } from './cat/app.service';

@Injectable()
export class AppService {
  constructor(private readonly appService: App2Service) {}
  getHello(): string {
    return this.appService.getDog();
  }
}
