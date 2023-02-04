import { ApiProp, Entity, IOrder, Property } from '@guitar-shop/core';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsArray, IsInt } from 'class-validator';

const { ItemIds } = Property;

export class CreateOrderDto implements IOrder {
  @Expose()
  @IsInt({ each: true })
  @IsArray()
  @ApiProperty(
    ApiProp.Comm({
      ent: Entity.Order,
      prop: Property.ItemIds,
      extra: { example: [1, 2, 1, 5] },
    })
  )
  public [ItemIds]: number[];
}
