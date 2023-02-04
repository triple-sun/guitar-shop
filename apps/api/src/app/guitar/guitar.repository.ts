import { GuitarEntity, ICRUD, Limit } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { IGuitar } from '@guitar-shop/core';

import { PrismaService } from '../prisma/prisma.service';
import { GuitarQueryDto } from './dto/guitar.query.dto';

@Injectable()
export class GuitarRepository implements ICRUD<GuitarEntity, number, IGuitar> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(item: GuitarEntity) {
    return await this.prisma.guitar.create({
      data: item.toObject(),
      include: { reviews: true },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.guitar.delete({ where: { id } });
  }

  public async findMany({strings, types, sortBy, sortOrder, page}: GuitarQueryDto) {
    const query = { where: {
      ...(strings.length > 0 ? {strings: { in: strings }} : {}),
      ...(types.length > 0 ? {type: { in: types }} : {})
    }}

    return await this.prisma.guitar.findMany({
      ...query,
      take: Limit.Items,
      skip: page > 0 ? Limit.Items * (page - 1) : undefined,
      orderBy: {
        [sortBy]: sortOrder,
      },
    });
  }

  public async findOne(id: number): Promise<IGuitar | null> {
    return await this.prisma.guitar.findUnique({
      where: { id },
      include: { reviews: true, _count: { select: { reviews: true } } },
    });
  }

  public async update(id: number, item: GuitarEntity) {
    return await this.prisma.guitar.update({
      where: { id },
      data: item.toObject(),
    });
  }
}
