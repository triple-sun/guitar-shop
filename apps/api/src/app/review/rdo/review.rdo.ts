import { fillObject } from "@guitar-shop/core";
import { Review } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { UserRDO } from "../../auth/rdo/user.rdo.dto";
import { GuitarRdo } from "../../guitar/rdo/guitar.rdo";

export class ReviewRdo implements Partial<Review> {
  @Expose()
  public id: number

  @Expose()
  public createdAt: Date

  @Expose()
  public pros: string

  @Expose()
  public cons: string

  @Expose()
  public comment: string

  @Expose()
  public rating: number

  @Expose()
  @Transform(({value}) => fillObject(UserRDO, value))
  public user: UserRDO

  @Expose()
  @Transform(({value}) => fillObject(GuitarRdo, value))
  public item: GuitarRdo
}
