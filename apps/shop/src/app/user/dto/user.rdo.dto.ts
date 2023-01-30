import { IsArray, IsDate, IsEmail, IsInt, IsJWT, IsString } from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { IUser, Property } from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';

export class UserRDO implements Pick<IUser, Property.PasswordHash | Property.Id | Property.Email> {
  @Expose({ name: Property.Id})
  @IsInt()
  public id: number

  @Expose()
  @IsEmail()
  public email: string

  @Expose()
  @IsString()
  public name: string

  @Expose({ name: Property.CreatedAt })
  @IsDate()
  @Type(() => Date)
  @Transform(({obj}) => obj.createdAt)
  public registeredAt: Date;

  @Expose()
  @IsArray()
  public reviews: number[];

  @Expose()
  @IsInt()
  public currentOrder: number;

  public orders: number[]
}

export class UserLoggedRDO extends PickType(UserRDO, ['email', 'id', 'name'] as const) {
  @Expose()
  @IsJWT()
  public token: string;
}

