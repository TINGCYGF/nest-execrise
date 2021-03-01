import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticleController, NewsController, UserController],
  providers: [AppService, NewsService],
})
export class AppModule {}
