import { Injectable, Module } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
class CatService {
  getCat() {
    return 'Mia';
  }
}

@Module({
  providers: [AppService, CatService, { provide: 'Foo', useValue: 'barbaz' }],
  exports: [AppService, CatService],
})
export class CatModule {}
