import { Property } from '@guitar-shop/core';
import { CanActivate, ExecutionContext, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from '../order.repository';

@Injectable()
export class OrderExistsGuard implements CanActivate {
  constructor(
    @Inject(OrderRepository) private readonly orderRepository: OrderRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    const order = await this.orderRepository.findOne(parseInt(request.params[Property.ItemId]));

    if (!order) {
      throw new NotFoundException(`Order with id ${request.params[Property.ItemId]} was not found`)
    }

    return !!order;
    }
}
