import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FridgeService } from './fridge.service';

@Controller('fridge')
export class FridgeController {
  constructor(private readonly fridgeService: FridgeService) {}

  @Get()
  findAll() {
    return this.fridgeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fridgeService.findOne(+id);
  }

//   @Patch(':id')
//   update(@Param('id') foodId: string, @Body() nutritionCheckId: number) {
//     return this.fridgeService.addToUserNutrition(+foodId, nutritionCheckId);
//   }

}
