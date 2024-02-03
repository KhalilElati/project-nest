import { Module } from '@nestjs/common';
import { NutritionCheckService } from './nutrition_check.service';
import { NutritionCheckController } from './nutrition_check.controller';
import { User } from 'src/user/user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NutritionCheck } from './entities/nutrition_check.entity';
import { UserService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([NutritionCheck,User])],
  controllers: [NutritionCheckController],
  providers: [NutritionCheckService,UserService],
})
export class NutritionCheckModule {}
