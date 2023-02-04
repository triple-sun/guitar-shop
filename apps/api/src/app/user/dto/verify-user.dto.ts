import { Property } from '@guitar-shop/core';
import { IntersectionType, PickType } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { CreateUserDto } from './create-user.dto';
import { UserIdDto } from './user-id.dto';

export class VerifyUserDto extends IntersectionType(
  UserIdDto,
  PickType(CreateUserDto, [Property.Name] as const)
) {
  @Expose()
  [Property.IsAdmin]: boolean;
}
