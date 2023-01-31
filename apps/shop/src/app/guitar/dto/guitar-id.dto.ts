import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";
import { ApiProp, Entity, Property } from '@guitar-shop/core';

const { ItemId, Id } = Property

export class GuitarIdDto {
  @Expose()
  @IsInt()
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: ItemId}))
  public [ItemId]: number;
}
