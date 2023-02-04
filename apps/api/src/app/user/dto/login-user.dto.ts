import { Property } from '@guitar-shop/core';
import { PickType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

const { Email, Password } = Property;

export class LoginUserDTO extends PickType(CreateUserDto, [
  Email,
  Password,
] as const) {}
