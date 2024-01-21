import { Module } from '@nestjs/common';
import { PostgresConfigService } from './database/database.config';
import { SwaggerModule } from './swagger/swagger.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [SwaggerModule, ConfigModule],
  exports: [],
  controllers: [],
  providers: [PostgresConfigService],
})
export class CommonModule {}
