import { Module } from '@nestjs/common';
//引入公共服务
import { ArticleService } from '../../service/article/article.service';
//配置model
import { TypeOrmModule } from '@nestjs/typeorm';
import  { User } from '../../enyity/user.entity';
@Module({
  imports:[TypeOrmModule.forFeature([User])],
  controllers: [],
  providers:[ArticleService]
})
export class AdminModule {}