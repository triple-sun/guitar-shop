import { ApiProp, Entity, fillObject, Property } from '@guitar-shop/core';
import { ApiResponseProperty, PickType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsInt } from 'class-validator';
import { GuitarRdo } from '../../guitar/rdo/guitar.rdo';

class OrderGuitarRdo extends PickType(GuitarRdo, [Property.Id, Property.Photo, Property.Sku, Property.Strings, Property.Model, Property.Type, Property.Price] as const) {}

export class OrderItemRdo {
  @Expose()
  @Transform(({ value }) => fillObject(OrderGuitarRdo, value))
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: Property.Item, extra: { type: OrderGuitarRdo }}))
  public item: OrderGuitarRdo

  @Expose()
  @IsInt()
  @ApiResponseProperty(ApiProp.Num({ent: Entity.Guitar, prop: Property.Count, extra: { default: 1 }}))
  public count: number;

  @Expose()
  @Transform(({ obj }) => obj.item.price * obj.count)
  @ApiResponseProperty(ApiProp.Num({ ent: Entity.Guitar, prop: Property.TotalPrice }))
  public totalPrice: number;
}
