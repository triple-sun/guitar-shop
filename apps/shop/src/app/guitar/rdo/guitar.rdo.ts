import { getAverage, IGuitar, Property } from "@guitar-shop/core";
import { GuitarType, Review, StringCount } from "@prisma/client";
import { Expose, Transform } from "class-transformer";
import { ValidateIf } from "class-validator";

const { Id, Model, Description, Type, Photo, Sku, Strings, Price, CreatedAt, ReviewCount, TotalRating, Reviews } = Property

export class GuitarRdo implements IGuitar {
  @Expose()
  public [Id]: number

  @Expose()
  @ValidateIf(o => o.reviews.length > 0)
  @Transform(({obj}) => obj.reviews?.length ?? 0)
  public [ReviewCount]: number;

  @Expose()
  @Transform(({obj}) => getAverage(obj.reviews?.map((review: Review) => review.rating)))
  public [TotalRating]: number

  @Expose()
  public [Model]: string;

  @Expose()
  public [Description]: string;

  @Expose()
  public [Type]: GuitarType

  @Expose()
  public [Photo]: string;

  @Expose()
  public [Sku]: string;

  @Expose()
  public [Strings]: StringCount;

  @Expose()
  public [CreatedAt]: Date;

  @Expose()
  public [Price]: number;

  public [Reviews]: Review[]
}
