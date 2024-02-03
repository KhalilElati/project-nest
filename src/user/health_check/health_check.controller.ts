import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HealthCheckService } from './health_check.service';
import { HealthCheckDto } from './dto/health_check.dto';
//import { UpdateHealthCheckDto } from './dto/update-health_check.dto';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Post()
  create(@Body() healthCheckDetails: HealthCheckDto) {
    return this.healthCheckService.create(healthCheckDetails);
    // return healthCheckDetails;
  }

  @Get()
  findAll() {
    return this.healthCheckService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.healthCheckService.findOne(id);
  }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateHealthCheckDto: UpdateHealthCheckDto,
  // ) {
  //   return this.healthCheckService.update(+id, updateHealthCheckDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.healthCheckService.remove(id);
  }
}
