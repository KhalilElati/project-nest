import { BaseModel } from "src/common/base_model.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { WorkoutPlan } from "./workoutPlan.entity";
import { Session } from "./session.entity";

@Entity()
export class Workout extends BaseModel {
    @ManyToOne(() => WorkoutPlan, (workoutPlan) => workoutPlan.workouts)
    @JoinColumn({ name: 'workoutPlan_id' })
    workoutPlan: WorkoutPlan;

    @OneToMany(() => Session, (session) => session.workout)
    sessions: Session[];


}   