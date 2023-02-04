import { GuitarType, StringCount } from "@prisma/client";

export type TGuitar = {
  id: number;
  reviewCount: number;
  totalRating: number;
  model: string
  description: string;
  type: GuitarType,
  photo: string
  sku: string,
  strings: StringCount,
  createdAt: Date,
  price: number
}
