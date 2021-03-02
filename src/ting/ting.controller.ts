import { Controller, Get, Query, UsePipes } from "@nestjs/common";
//引入管道
import { TingPipe } from '../pipe/ting.pipe';
//引入joi
import * as Joi from '@hapi/joi'

//定义验证规则
let userScheam = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().integer().min(6).max(16).required()
})

@Controller('ting')
export class TingController {
  @Get()
  @UsePipes(new TingPipe(userScheam))//使用管道需要的装饰器
  index(@Query() info){
    console.log(info);
    return '这是一个新闻页面'
  }
}
