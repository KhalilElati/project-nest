import { Session } from "src/workout/entities/session.entity";
import { BaseModel } from "src/common/base_model.entity";
import { level } from "src/common/enums/level.enum";
import { Column, Entity, OneToMany } from "typeorm";
import { Workout } from "./workout.entity";


@Entity()
export class WorkoutPlan extends BaseModel{
    @Column()
    duration_in_weeks: number;

    @Column()
    session_per_week: number;

    @Column()
    level: level;

    @Column({type:'jsonb'})
    plan : JSON;

    @OneToMany(() => Workout, (Workout) => Workout.workoutPlan)
    workouts: Workout[];
}