import { ApiProp, Entity, IMAGE_MIME_TYPES, Property, Size, ValidateLength } from "@guitar-shop/core";
import { ApiProperty, } from "@nestjs/swagger";
import { GuitarType, StringCount } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { IsDefined, IsIn, IsInt, IsPositive, Max, Min } from "class-validator";
import { FileSystemStoredFile, HasMimeType, IsFile } from "nestjs-form-data";

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
  @IsFile()
  @HasMimeType(IMAGE_MIME_TYPES)
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: Photo, extra: { type: 'string', format: 'binary' }}))
  public [Photo]: FileSystemStoredFile

  @Expose()
  @ValidateLength()
  @ApiProperty(ApiProp.Str({ent: Entity.Guitar, prop: Sku}))
  public [Sku]: string;

  @Expose()
  @IsInt()
  @IsPositive()
  @Max(Size[Price].Max)
  @Min(Size[Price].Min)
  @ApiProperty(ApiProp.Int({ent: Entity.Guitar, prop: Price}))
  public  [Price]: number;
}

export class CreateGuitarQuery {
  @Expose()
  @IsDefined()
  @IsIn(Object.values(StringCount))
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: Strings, extra: { enum: StringCount, default: StringCount.Six}}))
  public [Strings]: StringCount;

  @Expose()
  @IsDefined()
  @IsIn(Object.values(GuitarType))
  @ApiProperty(ApiProp.Common({ent: Entity.Guitar, prop: Type, extra: { enum: GuitarType, default: GuitarType.Acoustic }}))
  public [Type]: GuitarType
}
