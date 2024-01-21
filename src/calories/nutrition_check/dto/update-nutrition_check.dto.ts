import { PartialType } from '@nestjs/mapped-types';
import { CreateNutritionCheckDto } from './create-nutrition_check.dto';

export class UpdateNutritionCheckDto extends PartialType(
  CreateNutritionCheckDto,
) {}
