import { Controller, Get, Req, Request, UseGuards } from "@nestjs/common";

@Controller('admin/auth')
export class AuthController {

  @Get()
  index(@Request() req){
    //登录 设置session
    req.session.username = "Ting";
    return "登录成功";
  }

}
