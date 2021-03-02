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
import { AuthController } from './auth/auth.controller';
//引入配置数据库连接
import { TypeOrmModule } from '@nestjs/typeorm';
import { PygController } from './pyg/pyg.controller';
import { ArticleService } from './service/article/article.service';
import { Repository } from "typeorm";

@Module({
  //引入其他模块
  imports: [AdminModule,Repository, TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "pyg",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  })],
  //控制器模块
  controllers: [AppController, ArticleController, NewsController, UserController, UploadController, UploadmanyController, PipeController, TingController, AuthController, PygController],
  //服务模块
  providers: [AppService, NewsService, ArticleService, Repository],
  //暴露子模块
})
export class AppModule {}
