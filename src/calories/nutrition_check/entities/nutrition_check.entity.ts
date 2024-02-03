import { BaseModel } from "src/common/base_model.entity";
import { User } from "src/user/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class NutritionCheck extends BaseModel{
    
    @Column('real')
    daily_need: number;

    @Column('real', {default: 0})
    daily_income: number;

    @ManyToOne(type => User, (user) => user.nutrition_checks)
    user: User;
}
