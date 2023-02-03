import { fillObject, OrderEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { NotifyService } from '../notify/notify.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderQueryDto } from './dto/order.query.dto';
import { OrderRepository } from './order.repository';
import { OrderFullRDO } from './rdo/order-full.rdo';
import { OrderShortRdo } from './rdo/order-short.rdo';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly notifyService: NotifyService
  ) {}
  async create(dto: CreateOrderDto, userId: number) {
    const order = await this.orderRepository.create(
      new OrderEntity({
        ...dto,
        userId
      })
    );

    const rdo = fillObject(OrderFullRDO, order)
    await this.notifyService.notifyNewOrder(rdo)

    return rdo
  }

  async findAll(dto: OrderQueryDto) {
    const {minPrice, maxPrice, ...query} = dto
    const orders = await this.orderRepository.findAll(query)

    const rdo = orders.map((order) => fillObject(OrderShortRdo, order))

    if (maxPrice || minPrice) {
      return rdo.filter((order) => order.totalPrice > minPrice && (maxPrice ? order.totalPrice < maxPrice : true))
    }

    return rdo
  }

  async findOne(id: number) {
    const order = await this.orderRepository.findOne(id);

    return fillObject(OrderFullRDO, order)
  }

  remove(id: number) {
    return this.orderRepository.destroy(id)
  }
}
