import { fillObject } from "@guitar-shop/core";
import { Review } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { UserRdo } from "../../auth/rdo/user.rdo";
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
  @Transform(({value}) => fillObject(UserRdo, value))
  public user: UserRdo

  @Expose()
  @Transform(({value}) => fillObject(GuitarRdo, value))
  public item: GuitarRdo
}
