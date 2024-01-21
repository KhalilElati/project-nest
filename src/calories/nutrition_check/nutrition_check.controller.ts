import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NutritionCheckService } from './nutrition_check.service';
import { CreateNutritionCheckDto } from './dto/create-nutrition_check.dto';
import { UpdateNutritionCheckDto } from './dto/update-nutrition_check.dto';

@Controller('nutrition-check')
export class NutritionCheckController {
  constructor(private readonly nutritionCheckService: NutritionCheckService) {}

  @Post()
  create(@Body() createNutritionCheckDto: CreateNutritionCheckDto) {
    return this.nutritionCheckService.create(createNutritionCheckDto);
  }

  @Get()
  findAll() {
    return this.nutritionCheckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nutritionCheckService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNutritionCheckDto: UpdateNutritionCheckDto) {
    return this.nutritionCheckService.update(+id, updateNutritionCheckDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nutritionCheckService.remove(+id);
  }
}
