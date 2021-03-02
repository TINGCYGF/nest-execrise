import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsService } from './service/news/news.service';

@Module({
  controllers: [UserController],
  providers: [NewsService]
})
export class AdminModule {}
