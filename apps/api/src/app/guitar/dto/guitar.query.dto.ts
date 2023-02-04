import { ApiProp, Entity, Property, ItemSortBy, SortOrder } from '@guitar-shop/core';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { GuitarType, StringCount } from '@prisma/client';
import { Expose, Transform } from 'class-transformer';
import { IsIn, IsInt, IsOptional, ValidateIf } from 'class-validator';

const { Strings } = Property;

export class GuitarQueryDto {
  @Expose()
  @IsOptional()
  @ValidateIf(o => o.strings.length > 0)
  @IsIn(Object.values(StringCount), {each: true})
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Strings,
      extra: { enum: StringCount, type: [StringCount], default: [] },
    })
  )
  public strings?: StringCount[] = []

  @Expose()
  @IsOptional()
  @ValidateIf(o => o.types.length > 0)
  @IsIn(Object.values(GuitarType), {each: true})
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.Type,
      extra: { enum: GuitarType, type: [GuitarType], default: []},
    })
  )
  public types?: GuitarType[] = []

  @Expose()
  @IsOptional()
  @Transform(({value}) => value ?? ItemSortBy.Date)
  @IsIn(Object.values(ItemSortBy))
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.SortBy,
      extra: { enum: ItemSortBy, default: ItemSortBy.Date, example: ItemSortBy.Date},
    })
  )
  public sortBy?: ItemSortBy = ItemSortBy.Date

  @Expose()
  @IsOptional()
  @Transform(({value}) => value ?? SortOrder.Asc)
  @IsIn(Object.values(SortOrder))
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.SortOrder,
      extra: { enum: SortOrder, default: SortOrder.Asc, example: SortOrder.Asc },
    })
  )
  public sortOrder?: SortOrder = SortOrder.Asc

  @Expose()
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.Page,
      extra: { default: 1 },
    })
  )
  public page?: number = 1
}
