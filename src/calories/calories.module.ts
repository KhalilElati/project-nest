import { Module } from '@nestjs/common';
import { NutritionCheckModule } from './nutrition_check/nutrition_check.module';

@Module({
  imports: [NutritionCheckModule],
})
export class CaloriesModule {}
