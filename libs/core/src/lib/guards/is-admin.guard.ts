import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class IsAdminGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()
    const user = request.user

    console.log(user)

    if (!user || (user && !user.isAdmin)) {
      throw new ForbiddenException(`This resource can only be accessed by an administrator!`)
    }

    return !!user.isAdmin
    }
}
