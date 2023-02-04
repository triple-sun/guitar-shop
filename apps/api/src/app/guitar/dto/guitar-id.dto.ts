import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ApiProp, Entity, Property } from '@guitar-shop/core';
import { IsInt } from 'class-validator';

const { Id } = Property;

export class GuitarIdDto {
  @Expose()
  @IsInt()
  @ApiProperty(ApiProp.Comm({ ent: Entity.Guitar, prop: Id }))
  public [Id]: number;
}
