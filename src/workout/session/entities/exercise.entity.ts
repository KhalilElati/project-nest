import { BaseModel } from "src/common/base_model.entity";
import { Column, Entity, ManyToMany } from "typeorm";
import { Session } from "./session.entity";

@Entity()
export class Exercise extends BaseModel{

@ManyToMany(()=>Session, session => session.exercises)
sessions: Session[]
@Column()
duration: Date



}