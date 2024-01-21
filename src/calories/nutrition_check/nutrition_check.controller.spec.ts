import { Test, TestingModule } from '@nestjs/testing';
import { NutritionCheckController } from './nutrition_check.controller';
import { NutritionCheckService } from './nutrition_check.service';

describe('NutritionCheckController', () => {
  let controller: NutritionCheckController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NutritionCheckController],
      providers: [NutritionCheckService],
    }).compile();

    controller = module.get<NutritionCheckController>(NutritionCheckController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
