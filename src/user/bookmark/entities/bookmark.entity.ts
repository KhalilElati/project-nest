import { Article } from "src/article/entities/article.entity";
import { BaseModel } from "src/common/base_model.entity";
import { User } from "src/user/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Bookmark extends BaseModel{

    @ManyToOne(type => Article)
    @JoinColumn({name:'article_id'})
    article: Article;

    @ManyToOne(type => User, (user) => user.bookmarks)
    @JoinColumn({name:'user_id'})
    user: User;
  newBookmark: Promise<Article[]>;
  
}
