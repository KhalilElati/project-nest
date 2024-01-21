import { Test, TestingModule } from '@nestjs/testing';
import { NutritionCheckService } from './nutrition_check.service';

describe('NutritionCheckService', () => {
  let service: NutritionCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NutritionCheckService],
    }).compile();

    service = module.get<NutritionCheckService>(NutritionCheckService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
