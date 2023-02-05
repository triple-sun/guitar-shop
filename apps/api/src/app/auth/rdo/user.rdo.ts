import { IsBoolean, IsEmail, IsInt, IsJWT, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { IntersectionType, PickType } from '@nestjs/swagger';
import { UserIdDto } from '../../user/dto/user-id.dto';
import { Property } from '@guitar-shop/core';
import { CreateUserDto } from '../../user/dto/create-user.dto';

const { Email, Name, IsAdmin, Id: Id, Token } = Property;

export class UserRdo extends IntersectionType(
  PickType(CreateUserDto, [Name, Email] as const),
  UserIdDto
) {
  @Expose({ name: Property.Id })
  @IsInt()
  public [Id]: number;

  @Expose()
  @IsEmail()
  public [Email]: string;

  @Expose()
  @IsString()
  public [Name]: string;

  @Expose()
  @IsBoolean()
  public [IsAdmin]: boolean;
}

export class UserLoggedRdo extends PickType(UserRdo, [] as const) {
  @Expose()
  @IsJWT()
  public [Token]: string;
}
