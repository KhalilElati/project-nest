import { BaseModel } from 'src/common/base_model.entity';
import { gender } from 'src/common/enums/gender.enum';
import { level } from 'src/common/enums/level.enum';
import { Workout } from 'src/workout/entities/workout.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from 'src/common/enums/role.enum';

@Entity('users')
export class User extends BaseModel {
  @Column({ nullable: true })
  first_name: string;
  @Column({ nullable: true })
  last_name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  date_of_birth: Date;
  @Column({ nullable: true })
  fitness_level: level;
  @Column({ nullable: true })
  gender: gender;

  @Column()
  @Exclude()
  salt: string;

  @Column({ type: 'enum', enum: Role, default: Role.SUBSCRIBER })
  role: Role;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Workout, (Workout) => Workout.user)
  workouts: Workout[];

  @Column({ default: false })
  has_workout_plan: boolean;
}
