import { User } from "@prisma/client";
import { Property } from "../enums/property.enum";

const { Id: Id, Email, Name, IsAdmin, Password, PasswordHash, Reviews, Items: OrderItems, UserId } = Property

export interface IUser extends Partial<User> {
  [Id]?: number;
  [UserId]?: number;
  [Name]: string;
  [Email]: string
  [IsAdmin]?: boolean
  [Password]?: string;
  [PasswordHash]?: string;
  [Reviews]?: number[];
  [OrderItems]?: number[]
}
