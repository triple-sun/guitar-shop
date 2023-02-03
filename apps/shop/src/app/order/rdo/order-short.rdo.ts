import { Guitar } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { OrderItemRdo } from "./order-item.rdo";

export class OrderShortRdo {
  @Expose()
  public id: number

  @Expose()
  @Transform(({obj}) => obj.items.length)
  public itemCount: number

  @Expose()
  @Transform(({obj}) => obj.items.map((item: OrderItemRdo) => item.price).reduce((a: number, b: number) => a + b))
  public totalPrice: number;

  @Expose()
  public createdAt: Date

  public items: Guitar[]
}
