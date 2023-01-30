import { IUser, UserEntity } from '@guitar-shop/shared-types';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from '../user/dto/login-user.dto';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
    constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async verifyUser(dto: LoginUserDTO) {
    const {email, password: password} = dto;

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

  async loginUser(user: IUser) {
    const payload = {
      sub: user.id,
      id: user.id,
      name: user.name,
      email: user.email,
    };

    return await this.jwtService.signAsync(payload)
  }
}
