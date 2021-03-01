import {Controller, Get, Param, Query, Render} from '@nestjs/common';
//引入服务
import { NewsService } from './news.service'

@Controller('news')
export class NewsController {
  //依赖注入
  constructor(private newsService:NewsService) {
  }


  @Get("view")
  @Render("default/index")
  getHello(){
    console.log(this.newsService);
  }

  @Get()
  addDate(@Query('id') id){
    console.log(id)
    return "获取里面参数"
  }

  //news/123
  @Get(":id")
  index(@Param() param){
    //{id: '123'}
    console.log(param)
    return "我是动态路由"
  }
}
