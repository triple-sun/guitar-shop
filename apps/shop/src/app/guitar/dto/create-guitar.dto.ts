import { ApiProp, capitalize, Entity, Property, Size, StringCountNumber, StringNumberToCount, ValidateLength } from "@guitar-shop/core";
import { ApiProperty, } from "@nestjs/swagger";
import { GuitarType, StringCount } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { IsIn, IsPositive, Max, Min } from "class-validator";

const { Model, Description, Type, Photo, Sku, Strings, Price } = Property

export class CreateGuitarDto {
  @Expose()
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.Guitar, prop: Model}))
  public [Model]: string

  @Expose()
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.Guitar, prop: Description}))
  public [Description]: string

  @Expose()
  @Transform(({value}) => capitalize(value))
  @IsIn(Object.values(GuitarType))
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: Type, extra: { enum: GuitarType }}))
  public [Type]: GuitarType

  @Expose()
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: Photo, extra: { type: 'string', format: 'binary' }}))
  public [Photo]: Express.Multer.File

  @Expose()
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.Guitar, prop: Sku}))
  public [Sku]: string;

  @Expose()
  @IsIn(Object.values(StringCountNumber))
  @Transform(({value}) => StringNumberToCount[value])
  @ApiProperty(ApiProp.Int({ent: Entity.Guitar, prop: Photo, extra: { enum: StringCountNumber }}))
  public [Strings]: StringCount;

  @Expose()
  @IsPositive()
  @Max(Size[Price].Max)
  @Min(Size[Price].Min)
  public [Price]: number;
}
