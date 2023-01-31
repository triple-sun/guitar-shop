import { GuitarEntity, ICRUD } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { Guitar } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GuitarRepository implements ICRUD<GuitarEntity, number, Guitar> {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: GuitarEntity): Promise<Guitar> {
    return await this.prisma.guitar.create({ data: item.toObject() })
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.guitar.delete({ where: { id } });
  }

  public async findMany(page: number) {
    return await this.prisma.guitar.findMany({
      take: 9,
      skip: page > 0 ? 9 * (page - 1) : undefined,
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  public async findOne(id: number): Promise<Guitar | null> {
    return await this.prisma.guitar.findUnique({ where: { id }})
  }

  public async update(id: number, item: GuitarEntity) {
    return await this.prisma.guitar.update({ where: { id }, data: item.toObject() })
  }
}
