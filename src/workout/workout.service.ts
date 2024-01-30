import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { User } from 'src/user/user/entities/user.entity';

@Injectable()
export class WorkoutService {
  constructor(
    private readonly workoutRepository: Repository<Workout>,
    private readonly workoutPlanRepository: Repository<WorkoutPlan>,
    private readonly userRepository: Repository<User>,
  ) {}

  getAllWorkoutPlans(): Promise<WorkoutPlan[]> {
    return this.workoutPlanRepository.find();
  }

  getWorkoutPlan(id: number): Promise<WorkoutPlan> {
    return this.workoutPlanRepository.findOne({where: {id: id}});
  }

  async attachWorkoutPlanToUser(workoutPlanId: number, userId: number): Promise<Boolean> {
    let workoutPlan = await this.workoutPlanRepository.findOne({where: {id: workoutPlanId}});
    let user = await this.userRepository.findOne({where: {id: userId}});
    if (user.has_workout_plan) {
      return false;
    }
    let workout = new Workout();
    workout.user = user;
    workout.workoutPlan = workoutPlan;
    workout.active = true;
    this.workoutRepository.save(workout);
    return true;
  }

  async getAllWorkouts(user_id): Promise<Workout[]> {
    return this.workoutRepository.find({where: {user: {id: user_id}}});
  }
}