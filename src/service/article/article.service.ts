import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//引入数据库表实体
import { User } from '../../enyity/user.entity';

@Injectable()
export class ArticleService {
  constructor(
    //引入数据库表示例赋值给articleRepository
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  //如查找数据
  async findAll(){
    return await this.userRepository.find();
  }

}
