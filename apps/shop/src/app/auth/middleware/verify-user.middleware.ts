
import { UserEntity } from '@guitar-shop/core';
import { ForbiddenException, Inject, Injectable, NestMiddleware, NotFoundException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UserRepository } from '../../user/user.repository';

@Injectable()
export class VerifyUserMiddleware implements NestMiddleware {
  constructor(
    @Inject(UserRepository) private readonly userRepository: UserRepository,
  ) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const { body: { email, password }} = req
    const user = await this.userRepository.findByEmail(email)
    
    if (!user) {
      throw new NotFoundException(`User with email ${email} was not found`)
    }

    const entity = new UserEntity(user)

    if (!(await entity.comparePassword(password))) {
      throw new ForbiddenException(`Wrong password.`)
    }

      req.body = entity.toObject()
      next()
  }
}
