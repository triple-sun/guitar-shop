import { Property } from '../enums/property.enum';
import { IEntity } from '../interfaces/entity.interface';
import { IOrder } from '../interfaces/order.interface';

const { OrderId, Id, UserId, ItemIds } = Property

export class OrderEntity implements IEntity<IOrder> {
  public [Id]?: number;
  public [OrderId]?: number;
  public [UserId]: number
  public [ItemIds]: number[];

  constructor(order: IOrder) {
    this.fillEntity(order);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(order: IOrder) {
    this[Id] = order[Id];
    this[OrderId] = order[Id];
    this[UserId] = order[UserId];
    this[ItemIds] = order[ItemIds]
  }
}
