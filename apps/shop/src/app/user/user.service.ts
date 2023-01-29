import { Prefix, UserEntity } from '@guitar-shop/shared-types';
import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly logger = new Logger(Prefix.User)
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

    this.logger.log(`Creating new user with email ${email}`)

    const created =  await this.userRepository.create(userEntity);

    this.logger.log(`Success!`)

    return created
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({id})
  }

  async remove(id: number) {
    return await this.userRepository.destroy(id)
  }
}
