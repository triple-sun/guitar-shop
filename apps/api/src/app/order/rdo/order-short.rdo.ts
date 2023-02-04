import { ApiProp, Entity, fillObject, getItems, Property } from '@guitar-shop/core';
import { ApiResponseProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { OrderItemRdo } from './order-item.rdo';

export class OrderShortRdo {
  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ ent: Entity.Order, prop: Property.Id }))
  public id: number;

  @Expose()
  @Transform(({ obj }) => obj.items.length)
  public itemCount: number;

  @Expose()
  @Transform(({ obj }) =>
    obj.items
      .map((item: OrderItemRdo) => item.item.price)
      .reduce((a: number, b: number) => a + b)
  )
  @ApiResponseProperty(ApiProp.Comm({ ent: Entity.Order, prop: Property.OrderPrice }))
  public orderPrice: number;

  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ ent: Entity.Order, prop: Property.CreatedAt }))
  public createdAt: Date;


  @Transform(({ obj }) =>
    getItems(obj.items).map((item) => fillObject(OrderItemRdo, item))
  )
  @ValidateNested()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Order, prop: Property.Items, extra: {type: [OrderItemRdo]}}))
  public items: OrderItemRdo[];
}
