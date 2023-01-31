import { Guitar, GuitarType, Review, StringCount } from "@prisma/client";
import { Property } from "../enums/property.enum";

const { Id, Model, Description, Type, Photo, Sku, Strings, Price, CreatedAt, UpdatedAt, Reviews, Items, ItemId, TotalRating } = Property

export interface IGuitar extends Partial<Guitar> {
  [Id]?: number
  [ItemId]?: number;
  [Model]: string
  [Description]: string
  [Type]: GuitarType
  [CreatedAt]?: Date;
  [UpdatedAt]?: Date;
  [Photo]: string;
  [Sku]: string;
  [Strings]: StringCount;
  [Price]: number;
  [Reviews]?: Review[];
  [Items]?: number[];
  [TotalRating]?: number;
}
