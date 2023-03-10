import { fillObject, UserEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NotifyService } from '../notify/notify.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserRdo, UserLoggedRdo } from './rdo/user.rdo';
import { UserRepository } from '../user/user.repository';
import { LoginUserDTO } from '../user/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly notifyService: NotifyService
  ) {}

  async findUser(id: number) {
    const user = await this.userRepository.findOne(id);

    return fillObject(UserRdo, user)
  }

  async registerUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(
      await new UserEntity(dto).setPassword(dto.password)
    );

    await this.notifyService.notifyNewUser(user);

    return fillObject(UserRdo, user);
  }

  async loginUser({email}: LoginUserDTO) {
    const {id: userId, name, isAdmin} = await this.userRepository.findByEmail(email)
    const token = await this.jwtService.signAsync({ userId, name, email, isAdmin });

    return fillObject(UserLoggedRdo, {token})
  }
}
