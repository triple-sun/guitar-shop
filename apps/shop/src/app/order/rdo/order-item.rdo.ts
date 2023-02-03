import { fillObject} from "@guitar-shop/core";
import { Expose, Transform, Type } from "class-transformer";
import { IsInt } from "class-validator";
import { GuitarRdo } from "../../guitar/rdo/guitar.rdo";

export class OrderItemRdo {
  @Expose()
  @Transform(({value}) => fillObject(GuitarRdo, value))
  @Type(() => GuitarRdo)
  public item: GuitarRdo

  @Expose()
  @IsInt()
  public count: number

  @Expose()
  @Transform(({obj}) => obj.item.price)
  public price: number;

  @Expose()
  @Transform(({obj}) => obj.item.price * obj.count)
  public totalPrice: number
}
