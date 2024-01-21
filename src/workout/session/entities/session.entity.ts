import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Exercise } from './exercise.entity';
@Entity()
export class Session extends BaseModel {
  @Column()
  week: number;
  @Column({ default: false })
  Done: Boolean;
  @ManyToMany(() => Exercise, (exercises) => exercises.sessions)
  @JoinTable()
  exercises: Exercise[];
}
