import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaloriesModule } from './calories/calories.module';
import { FridgeModule } from './fridge/fridge.module';
import { WorkoutModule } from './workout/workout.module';
import { CommonModule } from './common/common.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import configuration from './app.config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { PostgresConfigService } from './common/database/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
      // load: [configuration]
    }),
    CommonModule,
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],

      // imports: [ConfigModule],
    }),
    UserModule,
    AuthModule,
    CaloriesModule,
    FridgeModule,
    WorkoutModule,
  ],
  controllers: [AppController],
  providers: [AppService, PostgresConfigService],
})
export class AppModule {}
