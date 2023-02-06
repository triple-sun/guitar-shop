import { GuitarEntity, ICRUD, ItemSortBy, Limit } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { IGuitar } from '@guitar-shop/core';

import { PrismaService } from '../prisma/prisma.service';
import { GuitarQueryDto } from './dto/guitar.query.dto';
import { GuitarType, StringCount } from '@prisma/client';

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

  public async findMany({strings: stringCounts, types, sortBy, sortOrder, page, limit, minPrice, maxPrice}: GuitarQueryDto) {
    const take = limit === 0
      ? undefined
      : limit > Limit.Items
        ? limit
        : Limit.Items

    const orderBy = sortBy === ItemSortBy.Reviews ? {reviews: { _count: sortOrder}} : {[sortBy]: sortOrder}

    const items = await this.prisma.guitar.findMany({
      where: {
        strings: { in: (stringCounts?.length > 0) ? stringCounts: Object.values(StringCount)
        },
        type: { in: (types?.length > 0) ? types : Object.values(GuitarType) },
        price: {gte: minPrice ?? undefined, lte: maxPrice ?? undefined}
      },
      take: take,
      skip: (take && page > 1) ? take * (page - 1) : undefined,
      orderBy: orderBy,
    });

    return items
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
