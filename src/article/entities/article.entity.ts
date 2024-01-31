
import { BaseModel } from 'src/common/base_model.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Article extends BaseModel {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  image_path: string;
}
