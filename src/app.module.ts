import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleController } from './article/article.controller';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';
import { UserController } from './user/user.controller';
import { UploadController } from './upload/upload.controller';
import { UploadmanyController } from './uploadmany/uploadmany.controller';
import { PipeController } from './pipe/pipe.controller';
import { TingController } from './ting/ting.controller';
import { AdminModule } from './module/admin/admin.module';

@Module({
  //引入其他模块
  imports: [AdminModule],
  //控制器模块
  controllers: [AppController, ArticleController, NewsController, UserController, UploadController, UploadmanyController, PipeController, TingController],
  //服务模块
  providers: [AppService, NewsService],
  //暴露子模块
  exports: ['userindex']
})
export class AppModule {}
