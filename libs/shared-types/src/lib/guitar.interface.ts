import { GuitarType, StringCount } from "@prisma/client";
import { Property } from "./enums/property.enum";

export interface IGuitar {
  [Property.Id]?: number
  [Property.Title]: string
  [Property.Desc]: string
  [Property.Type]: GuitarType
  [Property.CreatedAt]: Date;
  [Property.Photo]: string;
  [Property.Sku]: string;
  [Property.Strings]: StringCount;
  [Property.TotalRating]: number;
  [Property.Price]: number;
  [Property.Reviews]?: string;
  [Property.ReviewCount]?: string;
}
