
import { Expose } from 'class-transformer';
import { OrderItemRdo } from './order-item.rdo';
import { OrderShortRdo } from './order-short.rdo';

export class OrderFullRDO extends OrderShortRdo {
  @Expose()
  public items: OrderItemRdo[];
}
