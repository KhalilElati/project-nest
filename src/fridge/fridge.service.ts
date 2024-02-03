import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FridgeService {
  constructor(@InjectRepository(Food) private foodRepository: Repository<Food>){

  }

  async findAll() {
    const foods = await this.foodRepository.find();
    return foods;
  }

  async findOne(id: number) {
    const food = await this.foodRepository.find({where :{id:id}})
    return food;
  }

//   addToUserNutrition(foodId: number, nutritionCheckId: number) {
//     return `This action adds the food with the id #${foodId} to the user nutrition_check record
//             with the id #${nutritionCheckId}`;
//   }

}
