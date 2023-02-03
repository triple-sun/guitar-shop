import { Order as TOrder, Review, User } from "@prisma/client";
import { Property } from "../enums/property.enum";

const { Id, Email, Name, IsAdmin, Password, PasswordHash, Reviews, Order, UserId } = Property

export interface IUser extends Partial<User> {
  [Id]?: number;
  [UserId]?: number;
  [Name]: string;
  [Email]: string
  [IsAdmin]?: boolean
  [Password]?: string;
  [PasswordHash]?: string;
  [Reviews]?: Review[];
  [Order]?: TOrder[];
}
