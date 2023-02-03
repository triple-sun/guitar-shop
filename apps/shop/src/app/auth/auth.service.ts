import { UserEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NotifyService } from '../notify/notify.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly notifyService: NotifyService
  ) {}

  async findOne(id: number) {
    return await this.userRepository.findOne(id)
  }

  async register(dto: CreateUserDto) {
    const user = await this.userRepository.create(
      await new UserEntity(dto).setPassword(dto.password)
    );

    await this.notifyService.notifyNewUser(user)

    return user
  }

  async loginUser(userId: number, email: string, name: string, isAdmin: boolean) {
    return await this.jwtService.signAsync({ userId, name, email, isAdmin })
  }
}
