import { BaseModel } from "src/common/base_model.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Session } from "./session.entity";

@Entity()
export class Exercise extends BaseModel {
    @Column()
    name: string;

    @Column()
    number_of_sets: number;

    @Column()
    number_of_reps: number;

    @ManyToOne(() => Session, (session) => session.exercises)
    @JoinColumn({ name: 'session_id' })
    session: Session;
}