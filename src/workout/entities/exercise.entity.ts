import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { Session } from './session.entity';
import { User } from 'src/user/user/entities/user.entity';

@Entity()
export class Exercise extends BaseModel {
  @Column()
  name: string;

  @Column()
  number_of_sets: number;
  
  @Column()
  number_of_reps: number;
  
}
