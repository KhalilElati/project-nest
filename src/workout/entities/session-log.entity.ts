import { BaseModel } from 'src/common/base_model.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ExerciseLog } from './exercise-log.entity';
import { Workout } from './workout.entity';
@Entity()
export class SessionLog extends BaseModel {
  @Column()
  muscle_group: string;

  @Column()
  number_of_exercises: number;

  @ManyToOne(() => Workout, (workout) => workout.sessionLogs)
  @JoinColumn({ name: 'workout_id' })
  workout: Workout;

  @OneToMany(() => ExerciseLog, (exerciseLog) => exerciseLog.sessionLog)
  exerciseLogs: ExerciseLog[];
}
