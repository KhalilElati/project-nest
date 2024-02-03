import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NutritionCheckService } from './nutrition_check.service';
import { NutritionCheckDto } from './dto/nutrition_check.dto';
// import { CreateNutritionCheckDto } from './dto/nutrition_check.dto';
//import { UpdateNutritionCheckDto } from './dto/update-nutrition_check.dto';

@Controller('nutrition-check')
export class NutritionCheckController {
  constructor(private readonly nutritionCheckService: NutritionCheckService) {}

  @Post()
  create(@Body() nutritionCheckDetails: NutritionCheckDto) {
    return this.nutritionCheckService.create(nutritionCheckDetails);
  }

  @Get()
  findAll() {
    return this.nutritionCheckService.findAll();
  }

  @Get('latest')
  findLatest(){
    let userId = 1;
    return this.nutritionCheckService.findLatest(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nutritionCheckService.findOne(id);
  }

  @Patch()
  update(
    
    @Body() nutritionCheckDetails: NutritionCheckDto,
  ) {
    let userId = 1;
    return this.nutritionCheckService.update(userId, nutritionCheckDetails);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.nutritionCheckService.remove(id);
  }
}
