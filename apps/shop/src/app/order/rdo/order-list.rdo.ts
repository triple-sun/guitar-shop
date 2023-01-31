import { Order } from "@prisma/client";
import { Expose } from "class-transformer";

export class OrderListRDO {
  @Expose()
  public orders: Order[]
}
