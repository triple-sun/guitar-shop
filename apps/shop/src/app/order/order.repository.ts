import { ICRUD, OrderEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrderRepository implements ICRUD<OrderEntity , number, Order> {
  constructor(
    private readonly prismaService: PrismaService
  ) {}

  public async findAll() {
    return await this.prismaService.order.findMany()
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

  public async findOne(id): Promise<Order | null> {
    return await this.prismaService.order.findUnique({
       where: { id }
    })
  }
}
