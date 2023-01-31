import { IsBoolean, IsEmail, IsInt, IsJWT, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { IntersectionType, PickType } from '@nestjs/swagger';
import { UserIdDTO } from './user-id.dto';
import { Property } from '@guitar-shop/core';
import { CreateUserDto } from './create-user.dto';

const { Email, Name, IsAdmin, Id, Token } = Property

export class UserRDO extends IntersectionType(
  PickType(CreateUserDto, [Name, Email] as const),
  UserIdDTO
) {
  @Expose({ name: Property.Id})
  @IsInt()
  public [Id]: number

  @Expose()
  @IsEmail()
  public [Email]: string

  @Expose()
  @IsString()
  public [Name]: string

  @Expose()
  @IsBoolean()
  public [IsAdmin]: boolean
}

export class UserLoggedRDO extends PickType(UserRDO, [] as const) {
  @Expose()
  @IsJWT()
  public [Token]: string;
}

