import { Controller } from '@nestjs/common';
import { NewsService } from "../../../../news/news.service";

@Controller('admin/news')
export class UserController {
  //依赖注入
  constructor(private newsService:NewsService) {
  }
}
