import { BaseModel } from "src/common/base_model.entity";
import { User } from "src/user/user/entities/user.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { Workout } from "./workout.entity";

@Entity()
export class Progress extends BaseModel{
    @ManyToOne(() => User, (user) => user.progress)
    user: User;

    @ManyToOne(() => Workout, (workout) => workout.progress)
    workout: Workout;

    @Column()
    progress_matrix: [[number]];
}