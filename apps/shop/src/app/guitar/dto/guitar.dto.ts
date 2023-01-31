import { IGuitar, Property } from "@guitar-shop/core";
import { GuitarType, StringCount } from "@prisma/client";
import { Expose } from "class-transformer";

const { Id, Model, Description, Type, Photo, Sku, Strings, Price } = Property

export class GuitarDTO implements IGuitar {
  @Expose()
  public [Id]: number

  @Expose()
  public [Model]: string

  @Expose()
  public [Description]: string

  @Expose()
  public [Type]: GuitarType

  @Expose()
  public [Photo]: string;

  @Expose()
  public [Sku]: string;

  @Expose()
  public [Strings]: StringCount;

  @Expose()
  public [Price]: number;
}
