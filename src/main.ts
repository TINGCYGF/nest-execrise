import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//入口文件引入express平台HTTP平台
import { NestExpressApplication } from '@nestjs/platform-express';

import {join} from "path";

import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.useStaticAssets('public');  //配置静态资源目录
  app.useStaticAssets(join(__dirname, '..', 'public'), {   //配置虚拟目录
    prefix: '/static/', //设置虚拟路径
  });

  //注意首先必须安装模板引擎
  app.setBaseViewsDir('views');// 放视图的文件
  app.setViewEngine('ejs');

  app.use(cookieParser());
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))


  await app.listen(3000);
}
bootstrap();
