import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { SessionLog } from './session-log.entity';

@Entity()
export class ExerciseLog extends BaseModel {
  @Column()
  name: string;

  @Column()
  number_of_sets: number;
  
  @Column()
  number_of_reps: number;

  @ManyToOne(() => SessionLog, (sessionLog) => sessionLog.exerciseLogs)
  @JoinColumn({ name: 'session_id' })
  sessionLog: SessionLog;
  
}
