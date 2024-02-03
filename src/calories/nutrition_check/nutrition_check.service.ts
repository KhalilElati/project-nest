import { Injectable } from '@nestjs/common';
//import { CreateNutritionCheckDto } from './dto/nutrition_check.dto';
//import { UpdateNutritionCheckDto } from './dto/update-nutrition_check.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { NutritionCheck } from './entities/nutrition_check.entity';
import { Repository } from 'typeorm';
import { NutritionCheckDto } from './dto/nutrition_check.dto';
import { User } from 'src/user/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class NutritionCheckService {
  // constructor(@InjectRepository(Food) private foodRepository: Repository<Food>){

  // }
  constructor(
    @InjectRepository(NutritionCheck) 
    private nutritionCheckRepository: Repository<NutritionCheck>,
    private readonly userService: UserService){
  
  }
  async create(nutritionCheckDetails: NutritionCheckDto) {
    const nutritionCheck = await this.nutritionCheckRepository.create({
      ...nutritionCheckDetails,
    });
    return this.nutritionCheckRepository.save(nutritionCheck);
  }

  async findAll() {
    const nutritionChecks = await this.nutritionCheckRepository.find();
    return nutritionChecks;
  }

  findOne(id: number) {
    const nutritionCheck = this.nutritionCheckRepository.find({where: {id:id}});
    return nutritionCheck;
  }

  async findLatest(userId :number){
    // const user = this.userService.findOne(userId);
    const user = new User();
    const latestNutritionCheck = await this.nutritionCheckRepository.findOne({
      where: {user:user},
      order:{
        updatedAt : 'DESC',
      }
      
    })
    return latestNutritionCheck;
  }

  async update(userId: number, nutritionCheckDetails: NutritionCheckDto) {
    const nutritionCheck = await this.findLatest(userId);
    const today = new Date();
    if (nutritionCheck.updatedAt.getFullYear()===today.getFullYear() &&
        nutritionCheck.updatedAt.getMonth()===today.getMonth() &&
        nutritionCheck.updatedAt.getDate()===today.getDate() ){
          const id = nutritionCheck.id;
          return this.nutritionCheckRepository.update({id},{...nutritionCheckDetails});
    }
    return this.nutritionCheckRepository.create({...nutritionCheckDetails});
  }

  remove(id: number) {
    return this.nutritionCheckRepository.softDelete(id);
  }
}
