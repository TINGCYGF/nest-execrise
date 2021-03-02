import { Controller } from '@nestjs/common';

@Controller('pipe')
export class PipeController {

  getHelllo(): string {
    return 'pipe'
  }

}
