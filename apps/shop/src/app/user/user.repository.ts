import { PrismaService } from '@guitar-shop/prisma';
import { ICRUD, IUser, UserEntity } from '@guitar-shop/shared-types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements ICRUD<UserEntity, number | Partial<IUser>, IUser> {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async findAll() {
    return await this.prisma.user.findMany()
  }

  public async create(item: UserEntity): Promise<IUser> {
    return await this.prisma.user.create({
      data: item.toObject()
    })
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.user.delete({
      where: { id }
    });
  }

  public async findOne({id, email}: Partial<IUser>): Promise<IUser | null> {
    return await this.prisma.user.findUnique({
       where: email ? { email } : { id }
    })
  }

  public async update(id: number, item: UserEntity): Promise<IUser> {
    return await this.prisma.user.update({
      where: { id }, data: item.toObject()
    })
  }
}
