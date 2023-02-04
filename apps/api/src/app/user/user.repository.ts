import { ICRUD, IUser, UserEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository
  implements ICRUD<UserEntity, number | string, IUser>
{
  constructor(private readonly prismaService: PrismaService) {}

  public async findAll() {
    return await this.prismaService.user.findMany();
  }

  public async create(item: UserEntity): Promise<IUser> {
    return await this.prismaService.user.create({
      data: item.toObject(),
    });
  }

  public async findOne(id: number): Promise<IUser | null> {
    return await this.prismaService.user.findUnique({
      where: { id },
    });
  }

  public async findByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email }
    });
  }
}
