import { BaseModel } from "src/common/base_model.entity";
import { User } from "src/user/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class HealthCheck extends BaseModel {
    @Column('real')
    weight: number;

    @Column('real')
    height: number;

    @Column('real')
    body_fat: number;

    @Column({default: () => 'CURRENT_TIMESTAMP'})
    mesure_date: Date;

    @ManyToOne(type => User, (user) => user.health_checks)
    @JoinColumn({ name: 'user_id' })
    user: User;
}
