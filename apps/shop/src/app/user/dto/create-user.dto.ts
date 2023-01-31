import { ApiProp, Entity, IUser, Property, ValidateLength } from "@guitar-shop/core";
import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsEmail, ValidateIf } from "class-validator";

const { Email, Name, Password } = Property


export class CreateUserDto implements Pick<IUser, Property.Email | Property.Name | Property.Password> {
  @Expose()
  @IsEmail({},{ message: 'Invalid email.'})
  @ApiProperty(ApiProp.Common({ent: Entity.User, prop: Email}))
  public [Email]: string;

  @Expose()
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.User, prop: Name}))
  public [Name]: string;

  @Expose()
  @ValidateIf(o => o.email !== 'admin@guitar-shop.local')
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.User, prop: Password}))
  public [Password]: string
}
