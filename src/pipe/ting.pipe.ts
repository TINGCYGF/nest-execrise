import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TingPipe implements PipeTransform {
  //接收userScheam验证
  private schema;
  constructor(schema) {
    this.schema = schema
  }
  transform(value: any, metadata: ArgumentMetadata) {
    //验证数据是否符合要求
    const { error } = this.schema.validate(value);
    console.log(error);
    if(error){
      return false;
    }
    return value;
  }
}
