import { Injectable } from '@nestjs/common';
import { bookmarkDto } from './dto/bookmark.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/article/entities/article.entity';
import { Repository } from 'typeorm';
import { ArticleService } from 'src/article/article.service';
import { Bookmark } from './entities/bookmark.entity';
import { UserService } from 'src/user/user.service'
import { User } from '../user/entities/user.entity';


@Injectable()
export class BookmarkService {
  // private readonly bookmarkService: BookmarkService
  constructor(
    @InjectRepository(Bookmark) private readonly bookmarkRepository:Repository<Bookmark>,
    private readonly articleService: ArticleService,
    private readonly userService: UserService,
  ){}

  async create(bookmarkDto: bookmarkDto, userId:number) {
    const article = await this.articleService.getById(bookmarkDto.articleId);
    // const user = this.userService.findOne(userId);
    const user = new User();
    
    let newBookmark = new Bookmark();
    newBookmark.user = user;
    newBookmark.article = article;
    const bookmark = this.bookmarkRepository.create({
      ...newBookmark
    }
    )

    return await this.bookmarkRepository.save(bookmark);
  }

  async findAll() {
    const bookmarks = this.bookmarkRepository.find();
    return bookmarks;
  }

  findOne(id: number) {
    const bookmark = this.bookmarkRepository.findOne({where: {id:id}});
    return bookmark;
  }

  findByUserId(userId: number){
    // const user = this.userService.findOne(userId);
    const user = new User();
    const bookmarks = this.bookmarkRepository.find({where: {user:user}, relations:['user']});
    return bookmarks;
  }

  update(id: number, updateBookmarkDto: bookmarkDto) {
    return `This action updates a #${id} bookmark`;
  }

  async remove(userId:number, id: number) {
    // const user = this.userService.findOne(userId);
    const user = new User();
    const bookmark = await this.bookmarkRepository.findOne({where: {id:id}})
    if (bookmark.user != user){
      return "can't delete others bookmark"
    }
    return this.bookmarkRepository.softDelete(id);
  }
}
