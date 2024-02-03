import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { Repository } from 'typeorm';
import { Workout } from './entities/workout.entity';
import { WorkoutPlan } from './entities/workout-plan.entity';
import { User } from 'src/user/user/entities/user.entity';
import { SessionLog } from './entities/session-log.entity';
import { CreateSessionLogDto } from './dto/create-session-log.dto';
import { ExerciseLog } from './entities/exercise-log.entity';

@Injectable()
export class WorkoutService {
  constructor(
    private readonly workoutRepository: Repository<Workout>,
    private readonly workoutPlanRepository: Repository<WorkoutPlan>,
    private readonly userRepository: Repository<User>,
    private readonly sessionLogRepository: Repository<SessionLog>,
  ) {}

  getAllWorkoutPlans(): Promise<WorkoutPlan[]> {
    return this.workoutPlanRepository.find();
  }

  getWorkoutPlan(id: number): Promise<WorkoutPlan> {
    return this.workoutPlanRepository.findOne({ where: { id: id } });
  }

  async attachWorkoutPlanToUser(
    workoutPlanId: number,
    userId: number,
  ): Promise<Boolean> {
    let workoutPlan = await this.workoutPlanRepository.findOne({
      where: { id: workoutPlanId },
    });
    let user = await this.userRepository.findOne({ where: { id: userId } });
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
    return this.workoutRepository.find({ where: { user: { id: user_id } } });
  }

  async logSession(
    user_id: number,
    workout_id: number,
    sessionLog: CreateSessionLogDto,
  ) {
    let workout = await this.workoutRepository.findOne({
      where: { id: workout_id },
    });
    if (workout.user.id != user_id) {
      return 'brmchinyk';
    }
    let sessionLog_db = new SessionLog();
    sessionLog_db.workout = workout;
    sessionLog_db.muscle_group = sessionLog.muscle_group;
    let exercises = [];
    for (let exercise of sessionLog.exercises) {
      exercises.push(new ExerciseLog(exercise));
    }
    sessionLog_db.exerciseLogs = exercises;
    this.sessionLogRepository.save(sessionLog_db);
  }
}
