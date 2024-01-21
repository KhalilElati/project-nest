import { Module } from '@nestjs/common';
import { NutritionCheckService } from './nutrition_check.service';
import { NutritionCheckController } from './nutrition_check.controller';

@Module({
  controllers: [NutritionCheckController],
  providers: [NutritionCheckService],
})
export class NutritionCheckModule {}
