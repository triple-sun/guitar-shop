import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ApiProp, Entity, Property } from '@guitar-shop/core';

const { OrderId } = Property;

export class OrderIdDto {
  @Expose()
  @IsInt()
  @ApiProperty(ApiProp.Comm({ ent: Entity.Guitar, prop: OrderId }))
  public [OrderId]: number;
}
