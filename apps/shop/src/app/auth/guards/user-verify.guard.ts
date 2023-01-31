import { UserEntity } from '@guitar-shop/core';
import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class UserLoginGuard implements CanActivate {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { email, password } = context.switchToHttp().getRequest().body

    const user = await this.userRepository.findOne({ email })

    if (!user) {
      throw new NotFoundException(`User with email ${email} was not found`)
    }

    const userEntity = new UserEntity(user);

    if (!(await userEntity.comparePassword(password))) {
      throw new ForbiddenException(`Wrong password.`)
    }

    return !!user;
    }
}
