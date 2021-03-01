import {Body, Controller, Get, Post, Query, Request} from '@nestjs/common';

@Controller('article')
export class ArticleController {
  //get请求
  @Get()
  index() {
    //输出内容
    return '我是article控制器';
  }

  //路由拼接article/add
  @Get('add')
  //获取url装饰器(get参数)
  addArticle(@Query() query) {
    console.log(query)
    //输出内容
    return '我是article/add';
  }

  @Get('edit')
  //request装饰器获取请求信息
  editArticle(@Request() req){
    console.log(req.query)
    return "我是article/edit"
  }

  @Post('create')
  //Body装饰器获取post内容
  create(@Body() body){
    console.log(body)
    return '我是Post请求'
  }

}

