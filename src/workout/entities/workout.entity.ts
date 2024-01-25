import { Session } from "src/workout/entities/session.entity";
import { BaseModel } from "src/common/base_model.entity";
import { level } from "src/common/enums/level.enum";
import { Column, Entity, OneToMany } from "typeorm";
import { Progress } from "./progress.entity";

@Entity()
export class Workout extends BaseModel{
    @Column()
    duration_in_weeks: number;

    @Column()
    session_per_week: number;

    @Column()
    level: level;

    @OneToMany(() => Session, (session) => session.workout)
    sessions: Session[];

    @OneToMany(() => Progress, (progress) => progress.workout)
    progress: Progress[];
}