import { Test, TestingModule } from '@nestjs/testing';
import { TingController } from './ting.controller';

describe('TingController', () => {
  let controller: TingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TingController],
    }).compile();

    controller = module.get<TingController>(TingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
