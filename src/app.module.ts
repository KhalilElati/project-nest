import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaloriesModule } from './calories/calories.module';
import { FridgeModule } from './fridge/fridge.module';
import { CommonModule } from './common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import configuration from './app.config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PostgresConfigService } from './common/database/database.config';
import { WorkoutModule } from './workout/workout.module';
import { BaseModel } from './common/base_model.entity';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      // load: [configuration]
    }),
    CommonModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
          

      // imports: [ConfigModule],
    }),
    AuthModule,
    UserModule,
    CaloriesModule,
    FridgeModule,
    WorkoutModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostgresConfigService, UserService],
})
export class AppModule {}
