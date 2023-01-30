import { UserEntity } from '@guitar-shop/shared-types';
import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  async findAll() {
    return await this.userRepository.findAll()
  }

  async create({email, name, password}: CreateUserDto) {
    const user = await this.userRepository.findOne({email})

    if (user) {
      throw new ConflictException('User with that email already exists')
    }

    const newUserData = {
      email,
      name,
      passwordHash: '',
      isAdmin: false
    };

    const userEntity = await new UserEntity(newUserData).setPassword(password)

    return await this.userRepository.create(userEntity);
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({id})
  }

  async remove(id: number) {
    return await this.userRepository.destroy(id)
  }
}
