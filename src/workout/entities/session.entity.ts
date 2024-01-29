import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Exercise } from './exercise.entity';
import { Workout } from './workout.entity';
@Entity()
export class Session extends BaseModel {
  @Column()
  muscle_group: string;

  @Column()
  number_of_exercises: number;

  @ManyToOne(() => Workout, (workout) => workout.sessions)
  @JoinColumn({ name: 'workout_id' })
  workout: Workout;
  
  @OneToMany(() => Exercise, (exercise) => exercise.session)
  exercises: Exercise[];
}
