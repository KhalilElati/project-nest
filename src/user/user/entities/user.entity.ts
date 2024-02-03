import { NutritionCheck } from "src/calories/nutrition_check/entities/nutrition_check.entity";
import { BaseModel } from 'src/common/base_model.entity';
import { gender } from 'src/common/enums/gender.enum';
import { level } from 'src/common/enums/level.enum';
import { Bookmark } from "src/user/bookmark/entities/bookmark.entity";
import { HealthCheck } from "src/user/health_check/entities/health_check.entity";
import { Workout } from 'src/workout/entities/workout.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

    @Column({default: false})
    has_workout_plan: boolean;

    @OneToMany(type => HealthCheck, (healthCheck) => healthCheck.user)
    health_checks: HealthCheck[];
    
    @OneToMany(type => NutritionCheck, (nutritionCheck) => nutritionCheck.user)
    nutrition_checks: NutritionCheck[];

    @OneToMany(type => Bookmark, (bookmark) => bookmark.user)
    bookmarks: Bookmark[];
}
