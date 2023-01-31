import { CanActivate, ExecutionContext, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { id } = context.switchToHttp().getRequest().params
    const { email } = context.switchToHttp().getRequest().body

    const user = await this.userRepository.findOne(email
      ? { email }
      : { id: parseInt(id) }
    );

    if (!user) {
      throw new NotFoundException(`User with ${ email ? `email ${email}` : `id ${id}` } was not found`)
    }

    return !!user;
    }
}
