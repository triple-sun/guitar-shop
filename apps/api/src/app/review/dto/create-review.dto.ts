import { ApiProp, Entity, IReview, Property } from '@guitar-shop/core';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

const { Pros, Cons, Comment, Rating } = Property;

export class CreateReviewDto implements IReview {
  @Expose()
  @ApiProperty(ApiProp.Str({ ent: Entity.Review, prop: Property.Pros }))
  public [Pros]: string;

  @Expose()
  @ApiProperty(ApiProp.Str({ ent: Entity.Review, prop: Property.Cons }))
  public [Cons]: string;

  @Expose()
  @ApiProperty(ApiProp.Str({ ent: Entity.Review, prop: Property.Comment }))
  public [Comment]: string;

  @Expose()
  @ApiProperty(
    ApiProp.Num({
      ent: Entity.Review,
      prop: Property.Rating,
      extra: { default: 1 },
    })
  )
  public [Rating]: number;
}
