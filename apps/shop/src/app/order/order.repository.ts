import { ICRUD, OrderEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { OrderQueryDto } from './dto/order.query.dto';

@Injectable()
export class OrderRepository implements ICRUD<OrderEntity , number, Order> {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  public async findAll({page, startDate, endDate}: OrderQueryDto) {
    return await this.prismaService.order.findMany({
      where: {
        createdAt: { lte: endDate, gte: startDate},
      },
      include: { items: true },
      take: 10,
      skip: page > 0 ? 10 * (page - 1) : undefined,
      orderBy: {
        createdAt: 'desc'
      }
    })

  }

  public async create(item: OrderEntity): Promise<Order> {
    const {itemIds, ...order} = item.toObject()
    const items = itemIds.map((id) => ({id}))
    return await this.prismaService.order.create({
      data: {
        ...order,
        items: {
          connect: items
        }
      },
      include: {
        items: true
      }
    })
  }

  public async findOne(id: number): Promise<Order | null> {
    return await this.prismaService.order.findUnique({
       where: { id }, include: {
        items: {
          include: { reviews: true }
       }}
    })
  }

  public async destroy(id: number) {
    await this.prismaService.order.delete({
       where: { id }
    })
  }
}
