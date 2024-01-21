import { Injectable } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Injectable()
@ApiTags('hello-world')
export class AppService {
  getHello(): string {
    return 'OLÁ MUNDO DA API DE INDICADORES INSE';
  }
}
