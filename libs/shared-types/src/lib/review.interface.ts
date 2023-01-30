import { Property } from "./enums/property.enum";

export interface IReview {
  [Property.Id]?: number;
  [Property.CreatedAt]: Date
  [Property.Pros]: string
  [Property.Cons]: string
  [Property.Comment]: string
  [Property.Rating]: number
}
