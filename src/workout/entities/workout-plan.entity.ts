import { BaseModel } from '../../common/base_model.entity';
import { level } from '../../common/enums/level.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { Workout } from './workout.entity';
import { Session } from './session.entity';

@Entity()
export class WorkoutPlan extends BaseModel {
  @Column()
  duration_in_weeks: number;

  @Column()
  session_per_week: number;

  @Column()
  level: level;

  @OneToMany(() => Workout, (Workout) => Workout.workoutPlan)
  workouts: Workout[];

  @OneToMany(() => Session, (Session) => Session.workoutPlan)
  sessions: Session[];
}
