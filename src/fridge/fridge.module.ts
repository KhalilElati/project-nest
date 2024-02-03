import { Module } from '@nestjs/common';
import { FridgeController } from './fridge.controller';
import { FridgeService } from './fridge.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Food } from './entities/food.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Food])], // Import TypeOrmModule with the FoodRepository
    controllers: [FridgeController],
    providers:[FridgeService]
})
export class FridgeModule {}
