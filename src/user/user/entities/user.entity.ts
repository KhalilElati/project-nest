import { NutritionCheck } from "src/calories/nutrition_check/entities/nutrition_check.entity";
import { BaseModel } from "src/common/base_model.entity";
import { gender } from "src/common/enums/gender.enum";
import { level } from "src/common/enums/level.enum";
import { Bookmark } from "src/user/bookmark/entities/bookmark.entity";
import { HealthCheck } from "src/user/health_check/entities/health_check.entity";
import { Workout } from "src/workout/entities/workout.entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity()
export class User extends BaseModel{
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    date_of_birth: Date;

    @Column()
    fitness_level: level;

    @Column()
    gender: gender;

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
