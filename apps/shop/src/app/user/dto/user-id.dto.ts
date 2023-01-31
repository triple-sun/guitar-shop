import { IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";
import { ApiProp, Entity, Property } from '@guitar-shop/core';

const { Id } = Property

export class UserIdDTO {
  @Expose()
  @IsInt()
  @ApiProperty(ApiProp.Common({ent: Entity.User, prop: Id}))
  public Id: number;
}
