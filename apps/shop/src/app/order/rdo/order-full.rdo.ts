import { fillObject, getItems } from "@guitar-shop/core";
import { Expose, Transform } from "class-transformer";
import { ValidateNested } from "class-validator";
import { OrderItemRdo } from "./order-item.rdo";
import { OrderShortRdo } from "./order-short.rdo";

export class OrderFullRDO extends OrderShortRdo {
  @Expose()
  @Transform(({obj}) => getItems(obj.items).map((item) => fillObject(OrderItemRdo, item)))
  @ValidateNested()
  public orderItems: OrderItemRdo[]
}
