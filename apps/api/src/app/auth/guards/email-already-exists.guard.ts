import { Entity, getExistsMessage, Property } from '@guitar-shop/core';
import {
  CanActivate,
  ConflictException,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class EmailAlreadyExistsGuard implements CanActivate {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { email } = context.switchToHttp().getRequest().body;

    const user = await this.userRepository.findByEmail(email);

    if (user) {
      throw new ConflictException(getExistsMessage({entity: Entity.User, property: Property.Email})(email));
    }

    return !user;
  }
}
