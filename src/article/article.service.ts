import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { ArticleDto } from './dto/article.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async createArticle(articleDetails: ArticleDto, file) {
    
    const imagePath = path.join(__dirname, '../../src/article/images',`${Date.now()}-${file.originalname}`);
    articleDetails.image_path = imagePath;
    fs.writeFileSync(imagePath, file.buffer);
    const newArticle = this.articleRepository.create(articleDetails);
    
    return await this.articleRepository.save(newArticle);
  }

  async getAll() {
    const articles = this.articleRepository.find();
    return await articles;
  }

  async getById(id: number){
    const article = this.articleRepository.findOne({where: {id:id}});
    return await article;
  }
}
