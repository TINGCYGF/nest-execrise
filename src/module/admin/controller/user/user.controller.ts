import { Controller,Get } from '@nestjs/common';
//引入
import { ArticleService } from '../../../../service/article/article.service';

@Controller('admin/user')
export class NewsController {
  constructor(private articleService:ArticleService){}

  @Get()
  async index(){
    console.log(await this.articleService.findAll());
    return '我是admin模块里面的news控制器里面的方法';
  }
}