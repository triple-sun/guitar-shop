import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { OrderRepository } from '../order.repository';

@Injectable()
export class OrderExistsGuard implements CanActivate {
  constructor(
    @Inject(OrderRepository) private readonly orderRepository: OrderRepository
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.params);

    const order = await this.orderRepository.findOne(
      parseInt(request.params.id)
    );

    if (!order) {
      throw new NotFoundException(
        `Order with id ${request.params.id} was not found`
      );
    }

    return !!order;
  }
}
