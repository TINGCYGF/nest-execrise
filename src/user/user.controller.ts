import {Controller, Get, Response, Request} from '@nestjs/common';

@Controller('user')
export class UserController {

  @Get()
  index(@Response() res){
    //HttpOnly 默认 false 不允许 客户端脚本访问
    res.cookie("name",'我是Cookie',{maxAge: 900000, httpOnly: true});
    res.send('这是设置Cookie')
  }

  @Get('getCookies')
  getCookies(@Request() req){
    console.log(req.cookies.name);
    return req.cookies.name;
  }
}
