import { Module } from '@nestjs/common';
import { HealthCheckService } from './health_check.service';
import { HealthCheckController } from './health_check.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheck } from './entities/health_check.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HealthCheck])],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
