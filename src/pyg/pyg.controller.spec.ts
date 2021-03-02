import { Test, TestingModule } from '@nestjs/testing';
import { PygController } from './pyg.controller';

describe('PygController', () => {
  let controller: PygController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PygController],
    }).compile();

    controller = module.get<PygController>(PygController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
