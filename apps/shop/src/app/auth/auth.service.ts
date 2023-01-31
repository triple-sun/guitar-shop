import { UserEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async findOne(id: number) {
    return await this.userRepository.findOne(id)
  }

  async register(dto: CreateUserDto) {
    return await this.userRepository.create(
      await new UserEntity(dto).setPassword(dto.password)
    );
  }

  async loginUser(userId: number, email: string, name: string) {
    return await this.jwtService.signAsync({ userId, name, email })
  }
}
