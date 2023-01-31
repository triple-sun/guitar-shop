import { IUser, UserEntity } from '@guitar-shop/core';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async findOne(id: number) {
    return await this.userRepository.findOne({id})
  }

  async create({email, name, password}: CreateUserDto) {
    const newUserData = {
      email,
      name,
      passwordHash: '',
      isAdmin: false
    };

    const userEntity = await new UserEntity(newUserData).setPassword(password)

    return await this.userRepository.create(userEntity);
  }

  async verifyUser(dto: LoginUserDTO) {
    const {email, password} = dto;

    const user = await this.userRepository.findOne({email})

    if (!user) {
      throw new NotFoundException(`User with email ${email} was not found.`)
    }

    const userEntity = new UserEntity(user);

    if (!(await userEntity.comparePassword(password))) {
      throw new ForbiddenException(`Wrong password.`)
    }

    return userEntity;
  }

  async loginUser({id, email, name}: IUser) {
    return await this.jwtService.signAsync({ id, name, email })
  }
}
