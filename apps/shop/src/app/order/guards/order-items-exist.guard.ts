import { Property } from '@guitar-shop/core';
import { BadRequestException, CanActivate, ExecutionContext, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { GuitarRepository } from '../../guitar/guitar.repository';
import { CreateOrderDto } from '../dto/create-order.dto';

@Injectable()
export class OrderItemsExistGuard implements CanActivate {
  constructor(
    @Inject(GuitarRepository) private readonly guitarRepository: GuitarRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const body: CreateOrderDto = context.switchToHttp().getRequest().body
    const errors: number[] = []

    const guitarIds = [...new Set(body[Property.ItemIds])]

    if (guitarIds.length <= 0) {
      throw new BadRequestException('An order should contain at least one item.')
    }

    for(let i = 0; i < guitarIds.length; i++) {
      const id = guitarIds[i]
      const gtr = await this.guitarRepository.findOne(id)

      if (!gtr) {
        errors.push(id)
      }
    }

    if (errors.length > 0) {
      throw new NotFoundException(`Guitar${errors.length > 1 ? 's' : ''} with id${errors.length > 1 ? 's' : ''} ${errors.join(', ')} was not found`)
    }

    return !!guitarIds.length
    }
}
