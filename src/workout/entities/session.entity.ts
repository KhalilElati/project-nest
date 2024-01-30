import { BaseModel } from "src/common/base_model.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { WorkoutPlan } from "./workout-plan.entity";
import { Exercise } from "./exercise.entity";

@Entity()
export class Session extends BaseModel {
    @Column()
    muscle_group: string;

    @Column()
    number_of_exercises: number;

    @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.sessions)
    @JoinColumn({ name: 'workoutPlan_id' })
    workoutPlan: WorkoutPlan;

    @OneToMany(() => Exercise, (exercise) => exercise.session)
    exercises: Exercise[];
}