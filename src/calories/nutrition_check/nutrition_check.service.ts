import { Injectable } from '@nestjs/common';
import { CreateNutritionCheckDto } from './dto/create-nutrition_check.dto';
import { UpdateNutritionCheckDto } from './dto/update-nutrition_check.dto';

@Injectable()
export class NutritionCheckService {
  create(createNutritionCheckDto: CreateNutritionCheckDto) {
    return 'This action adds a new nutritionCheck';
  }

  findAll() {
    return `This action returns all nutritionCheck`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nutritionCheck`;
  }

  update(id: number, updateNutritionCheckDto: UpdateNutritionCheckDto) {
    return `This action updates a #${id} nutritionCheck`;
  }

  remove(id: number) {
    return `This action removes a #${id} nutritionCheck`;
  }
}
