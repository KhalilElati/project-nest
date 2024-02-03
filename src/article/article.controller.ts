import { Body, Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

    @Get()
    async getAll(){
      return this.articleService.getAll();
    }  

    @Get(':id')
    async getOne(@Param('id') id: number){
      return this.articleService.getById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('image')) 
    async createArticle(
      @Body() articleDetails: ArticleDto,
      @UploadedFile() file,
    ) {
      
      return await this.articleService.createArticle(articleDetails,file);
      
    }


}
