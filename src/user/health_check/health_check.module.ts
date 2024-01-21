import { Module } from '@nestjs/common';
import { HealthCheckService } from './health_check.service';
import { HealthCheckController } from './health_check.controller';

@Module({
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
