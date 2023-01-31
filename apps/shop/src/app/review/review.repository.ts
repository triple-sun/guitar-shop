import { ReviewEntity, ICRUD, IReview } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { Review } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewRepository implements ICRUD<ReviewEntity, number, IReview> {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  public async create(item: ReviewEntity): Promise<Review> {
    console.log({item})
    const {itemId, userId, ...review} = item.toObject();

    return await this.prisma.review.create({ data: {...review, item: { connect: { id: itemId }}, user: { connect: { id: userId }}} })
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.review.delete({ where: { id } });
  }

  public async findMany(itemId: number, page: number) {
    return await this.prisma.review.findMany({
      where: { itemId },
      take: 50,
      skip: page > 0 ? 9 * (page - 1) : undefined,
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

}
