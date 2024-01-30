import { BaseModel } from "src/common/base_model.entity";
import { gender } from "src/common/enums/gender.enum";
import { level } from "src/common/enums/level.enum";
import { Workout } from "src/workout/entities/workout.entity";
import { Column, OneToMany } from "typeorm";

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
}
