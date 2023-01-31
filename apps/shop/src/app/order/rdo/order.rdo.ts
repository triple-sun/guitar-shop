import { Guitar } from "@prisma/client";
import { Expose, Transform } from "class-transformer";

export class OrderRdo {
  public items: Guitar[]

  @Expose()
  @Transform(({obj}) => obj.items.length)
  public itemCount: number

  @Expose()
  @Transform(({obj}) => obj.items.map((item: Guitar) => item.price).reduce((a: number, b: number) => a + b))
  public priceTotal: number;

  @Expose()
  public createdAt: Date
}
