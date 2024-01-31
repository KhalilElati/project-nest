import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { WorkoutPlan } from './workout-plan.entity';
import { SessionLog } from './session-log.entity';
import { User } from 'src/user/user/entities/user.entity';

@Entity()
export class Workout extends BaseModel {
  @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.workouts)
  @JoinColumn({ name: 'workoutPlan_id' })
  workoutPlan: WorkoutPlan;

  @OneToMany(() => SessionLog, (SessionLog) => SessionLog.workout)
  sessionLogs: SessionLog[];

  @ManyToOne(() => User, (user) => user.workouts)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ default: false })
  active: boolean;
}
