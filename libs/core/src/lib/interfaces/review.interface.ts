import { Guitar, Review, User as TUser } from "@prisma/client";
import { Property } from "../enums/property.enum";

const { Id, CreatedAt, Pros, Cons, Comment, Rating, User, UserId, ItemId, Item } = Property

export interface IReview extends Partial<Review> {
  [Id]?: number;
  [CreatedAt]?: Date
  [Pros]: string
  [Cons]: string
  [Comment]: string
  [Rating]: number
  [User]?: Partial<TUser>
  [UserId]?: number;
  [ItemId]?: number;
  [Item]?: Partial<Guitar>
}
