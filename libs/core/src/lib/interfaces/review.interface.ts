import { Property } from "../enums/property.enum";

const { Id, CreatedAt, Pros, Cons, Comment, Rating } = Property

export interface IReview {
  [Id]?: number;
  [CreatedAt]: Date
  [Pros]: string
  [Cons]: string
  [Comment]: string
  [Rating]: number
}
