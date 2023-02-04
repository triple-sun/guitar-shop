import { Entity, getNotFoundMessage, Property } from '@guitar-shop/core';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { id } = context.switchToHttp().getRequest().params;
    const { email } = context.switchToHttp().getRequest().body;

    const user = email
      ? await this.userRepository.findByEmail(email)
      : await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException(getNotFoundMessage({entity: Entity.User, property: email ? Property.Email : Property.Id})(email ?? id));
    }

    return !!user;
  }
}
