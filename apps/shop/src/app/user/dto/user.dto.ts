import { IsBoolean, IsEmail, IsInt, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty, PickType } from "@nestjs/swagger";
import { Size, ValidateLength } from '@guitar-shop/core';
import { IUser, Property } from '@guitar-shop/shared-types';

export class UserDTO implements IUser {
  @Expose()
  @IsInt()
  @ApiProperty({ name: Property.Id, description: 'Unique user ID'})
  public id: number;

  @Expose()
  @IsEmail({},{ message: 'Invalid email.'})
  @ApiProperty({ name: Property.Email, description: 'Unique user email'})
  public email: string;

  @Expose()
  @IsString()
  @ValidateLength()
  @ApiProperty({ name: Property.Name, minLength: Size[Property.Name].Min, maxLength: Size[Property.Name].Max })
  public name: string;

  @IsString()
  @ValidateLength()
  @Exclude()
  @ApiProperty({ name: Property.Password, minLength: Size[Property.Password].Min, maxLength: Size[Property.Password].Max })
  public password: string

  @Expose()
  @IsBoolean()
  @ApiProperty({ name: Property.IsAdmin, default: false })
  public isAdmin: boolean
}

export class UserIdDTO extends PickType(UserDTO, ['id'] as const) {}
