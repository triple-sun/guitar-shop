import { Order as TOrder } from "@prisma/client";
import { Property } from "../enums/property.enum";
import { IUser } from "./user.interface";

export interface ISubscriber extends Pick<IUser, Property.Id | Property.UserId | Property.Name | Property.Email | Property.Password> {
  [Property.Order]?: TOrder
}
