import { Guitar, Order, User as TUser } from "@prisma/client";
import { Property } from "../enums/property.enum";

const { OrderId, Id, CreatedAt, UserId, User, Items, ItemIds } = Property

export interface IOrder extends Partial<Order> {
  [Id]?: number
  [OrderId]?: number
  [CreatedAt]?: Date
  [UserId]?: number
  [User]?: TUser
  [Items]?: Guitar[]
  [ItemIds]: number[]
}
