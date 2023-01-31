import { OrderEntity } from '@guitar-shop/core';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository
  ) {}
  create(dto: CreateOrderDto, userId: number) {
    const entity = new OrderEntity({...dto, userId})
    return this.orderRepository.create(entity);
  }

  async findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
