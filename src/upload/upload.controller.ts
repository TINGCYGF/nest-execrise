import { Body, Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createWriteStream } from "fs";
import { join } from "path";

@Controller('upload')
export class UploadController {
  @Post('doAdd')
  @UseInterceptors(FileInterceptor('pic'))
  //@UploadedFile() 装饰器从 request 中取出 file
  doAdd(@UploadedFile() file){
    console.log(file);  //上传图片的信息 必须在form的属性里面配置enctype="multipart/form-data"
    //创建写入流（拼接路径和文件名）
    let writeStream=createWriteStream(join(__dirname,'../../public/upload',`${Date.now()}-${file.originalname}`))
    writeStream.write(file.buffer);
    return '上传图片成功';
  }

  @Post('upload')
  //装饰器（拦截器（文件名））
  @UseInterceptors(FileInterceptor('pic'))
  //@UploadedFile() 装饰器从 request 中取出 file
  uploadFile(@Body() body, @UploadedFile() file) {
    console.log(file);//上传文件的信息
    //写入文件（拼接路径和文件名）
    let writeStream = createWriteStream(join(__dirname, '..','../public/upload', `${file.originalname}`));
    writeStream.write(file.buffer);
    return "上传"
  }
}
