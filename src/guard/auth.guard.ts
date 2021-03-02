import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    let req = context.switchToHttp().getRequest();
    if(req.path === '/admin/login'){
      return true
    }else {
      let se = req.session.username
      if(se){
        return true;//验证成功
      }
    }
    return false;
  }
}
