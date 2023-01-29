import { GuitarType, StringCount } from "@prisma/client";

export interface IGuitar {
  id?: number;
  name: string;
  desc: string;
  type: GuitarType;
  createdAt: Date
  photo: string
  sku: string
  strings: StringCount
  rating: number
  price: number
  reviews?: string
  reviewCount?: string;
}
