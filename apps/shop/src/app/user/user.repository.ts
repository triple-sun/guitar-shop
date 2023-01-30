import { ICRUD, IUser, UserEntity } from '@guitar-shop/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository implements ICRUD<UserEntity, number | Partial<IUser>, IUser> {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  public async findAll() {
    return await this.prismaService.user.findMany()
  }

  public async create(item: UserEntity): Promise<IUser> {
    return await this.prismaService.user.create({
      data: item.toObject()
    })
  }

  public async destroy(id: number): Promise<void> {
    await this.prismaService.user.delete({
      where: { id }
    });
  }

  public async findOne({id, email}: Partial<IUser>): Promise<IUser | null> {
    return await this.prismaService.user.findUnique({
       where: email ? { email } : { id }
    })
  }

  public async update(id: number, item: UserEntity): Promise<IUser> {
    return await this.prismaService.user.update({
      where: { id }, data: item.toObject()
    })
  }
}
