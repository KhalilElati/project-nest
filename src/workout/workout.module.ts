import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutController } from './workout.controller';
import { Repository } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from './entities/workout.entity';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { User } from 'src/user/user/entities/user.entity';

@Module({
  controllers: [WorkoutController],
  providers: [WorkoutService, Repository],
  imports: [TypeOrmModule.forFeature([Workout, WorkoutPlan, User])],
})
export class WorkoutModule {}
