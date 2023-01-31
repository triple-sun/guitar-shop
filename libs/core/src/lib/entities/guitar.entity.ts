import { GuitarType, StringCount } from '@prisma/client';
import { Property } from '../enums/property.enum';
import { IEntity } from '../interfaces/entity.interface';
import { IGuitar } from '../interfaces/guitar.interface';

const { Id, Model, Description, Type, Photo, Sku, Strings, Price } = Property

export class GuitarEntity implements IEntity<IGuitar> {
  public [Id]?: number;
  public [Model]: string;
  public [Description]: string;
  public [Type]: GuitarType
  public [Photo]: string
  public [Sku]: string
  public [Strings]: StringCount
  public [Price]: number

  constructor(guitar: IGuitar) {
    this.fillEntity(guitar);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(guitar: IGuitar) {
    this[Id] = guitar[Id];
    this[Model] = guitar[Model];
    this[Description] = guitar[Description];
    this[Type] = guitar[Type];
    this[Photo] = guitar[Photo]
    this[Sku] = guitar[Sku]
    this[Strings] = guitar[Strings]
    this[Price] = guitar[Price]
  }
}
