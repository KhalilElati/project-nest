import { BaseModel } from "src/common/base_model.entity";
import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Food {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({nullable: true})
    image_path: string;

    @Column('real')
    carbohydrate: number;

    @Column('real')
    cholesterol: number;

    @Column('real')
    fiber: number;

    @Column('real')
    kilocalories: number;

    @Column('real')
    protein: number;

    @Column('real')
    sugar_total: number;

    @Column('real')
    water: number;

    @Column('real')
    fat_total_lipid: number;
   
}