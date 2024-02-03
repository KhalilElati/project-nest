import { Module } from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { BookmarkController } from './bookmark.controller';
import { ArticleService } from 'src/article/article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmark } from './entities/bookmark.entity';
import { Article } from 'src/article/entities/article.entity';
import { UserService } from 'src/user/user.service';
import { User } from '../user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Bookmark,Article,User])],
  controllers: [BookmarkController],
  providers: [BookmarkService,ArticleService,UserService],
})
export class BookmarkModule {}
