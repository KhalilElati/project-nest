import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { SessionLog } from './entities/session-log.entity';
import { CreateSessionLogDto } from './dto/create-session-log.dto';

@Controller()
export class WorkoutController {
  constructor(private readonly workoutService: WorkoutService) {

  }

  @Get('workouts-plans')
  getAllWorkoutPlans() {
    return this.workoutService.getAllWorkoutPlans();
  }

  @Get('workouts-plans/:id')
  getWorkoutPlan(@Param('id') id: string) {
    return this.workoutService.getWorkoutPlan(+id);
  }

  @Post('workouts-plans/:id')
  attachWorkoutPlanToUser(@Param('id') workoutPlanId: number){
    let userId =  1;
    return this.workoutService.attachWorkoutPlanToUser(workoutPlanId, userId);
  }

  @Get('workouts')
  getAllWorkouts() {
    let userId = 1;
    return this.workoutService.getAllWorkouts(userId);
  }

  @Post('workouts/:id/session')
  logSession(@Param('id') workoutId: number, @Body() sessionLog: CreateSessionLogDto) {
    let userId = 1;
    return this.workoutService.logSession(userId, workoutId, sessionLog);
  }
}
