import { GuitarType, StringCount } from '@prisma/client';
import { IGuitar } from '../guitar.interface';

export class GuitarEntity implements IGuitar {
  public id?: number;
  public name: string;
  public desc: string;
  public type: GuitarType
  public createdAt: Date
  public photo: string
  public sku: string
  public strings: StringCount
  public rating: number
  public price: number

  constructor(guitar: IGuitar) {
    this.fillEntity(guitar);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(guitar: IGuitar) {
    this.id = guitar.id;
    this.name = guitar.name;
    this.desc = guitar.desc;
    this.type = guitar.type;
    this.createdAt = guitar.createdAt
    this.photo = guitar.photo
    this.sku = guitar.sku
    this.strings = guitar.strings
    this.rating = guitar.rating
    this.price = guitar.price
  }
}
