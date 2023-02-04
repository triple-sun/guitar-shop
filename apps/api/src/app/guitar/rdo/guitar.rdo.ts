import { ApiProp, Entity, getAverage, IGuitar, Property } from '@guitar-shop/core';
import { ApiResponseProperty } from '@nestjs/swagger';
import { GuitarType, Review, StringCount } from '@prisma/client';
import { Expose, Transform } from 'class-transformer';
import { ValidateIf } from 'class-validator';

const {
  Id,
  Model,
  Description,
  Type,
  Photo,
  Sku,
  Strings,
  Price,
  CreatedAt,
  ReviewCount,
  TotalRating,
  Reviews,
} = Property;

export class GuitarRdo implements IGuitar {
  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: Id}))
  public [Id]: number;

  @Expose()
  @ValidateIf((o) => o.reviews.length > 0)
  @Transform(({ obj }) => obj.reviews?.length ?? 0)
  @ApiResponseProperty(ApiProp.Num({ent: Entity.Guitar, prop: ReviewCount}))
  public [ReviewCount]: number;

  @Expose()
  @Transform(({ obj }) =>
    getAverage(obj.reviews?.map((review: Review) => review.rating))
  )
  @ApiResponseProperty(ApiProp.Num({ent: Entity.Guitar, prop: TotalRating, extra: { default: 0 }}))
  public [TotalRating]: number;

  @Expose()
  @ApiResponseProperty(ApiProp.Str({ent: Entity.Guitar, prop: Model}))
  public [Model]: string;

  @Expose()
  @ApiResponseProperty(ApiProp.Str({ent: Entity.Guitar, prop: Description}))
  public [Description]: string;

  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: Type, extra: { enum: GuitarType }}))
  public [Type]: GuitarType;

  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: Photo}))
  public [Photo]: string;

  @Expose()
  @ApiResponseProperty(ApiProp.Str({ent: Entity.Guitar, prop: Sku}))
  public [Sku]: string;

  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: Strings, extra: { enum: StringCount }}))
  public [Strings]: StringCount;

  @Expose()
  @ApiResponseProperty(ApiProp.Comm({ent: Entity.Guitar, prop: CreatedAt}))
  public [CreatedAt]: Date;

  @Expose()
  @ApiResponseProperty(ApiProp.Num({ent: Entity.Guitar, prop: Price}))
  public [Price]: number;

  public [Reviews]: Review[];
}
