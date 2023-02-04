import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ApiProp, Entity, Property } from '@guitar-shop/core';

const { UserId, Id } = Property;

export class UserIdDto {
  @Expose()
  @IsInt()
  @ApiProperty(ApiProp.Comm({ ent: Entity.User, prop: Id }))
  public [UserId]: number;
}
