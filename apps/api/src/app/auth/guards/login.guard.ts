import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';
import { UserEntity } from '@guitar-shop/core';

@Injectable()
export class UserLoginGuard implements CanActivate {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { email, password } = context.switchToHttp().getRequest().body

    const user = await this.userRepository.findByEmail(email);

    const entity = new UserEntity(user);

    if (!(await entity.comparePassword(password))) {
      throw new ForbiddenException(`Wrong password.`);
    }

    return !!user
  }
}
