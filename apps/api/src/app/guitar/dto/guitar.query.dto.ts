import { ApiProp, Entity, Property, ItemSortBy, SortOrder, Limit, Size } from '@guitar-shop/core';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { GuitarType, StringCount } from '@prisma/client';
import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsIn, IsInt, IsOptional, ValidateIf } from 'class-validator';

const { Strings } = Property;

export class GuitarQueryDto {
  @Expose()
  @ValidateIf(o => o.strings)
  @Transform(({value}) => value ? value : StringCount)
  @IsOptional({each: true})
  @IsEnum(StringCount, {each: true})
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Strings,
      extra: { enum: StringCount, type: [StringCount], default: [], example: [StringCount.Six, StringCount.Twelve] },
    })
  )
  public strings?: StringCount[];

  @Expose()
  @Transform(({value}) => value ? value : GuitarType)
  @IsOptional({each: true})
  @IsEnum(GuitarType, {each: true})
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.Types,
      extra: { enum: GuitarType, type: [GuitarType], default: [], example: [GuitarType.Acoustic, GuitarType.Electric]},
    })
  )
  public types?: GuitarType[]

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
  @Transform(({value}) => value ?? Size[Property.Price].Min)
  @IsInt()
  @ApiPropertyOptional(
    ApiProp.Num({
      ent: Entity.Guitar,
      prop: Property.MinPrice,
      extra: {example: 250, default: 100}
    })
  )
  public minPrice?: number;

  @Expose()
  @IsOptional()
  @Transform(({value}) => value ?? Size[Property.Price].Max)
  @IsInt()
  @ApiPropertyOptional(
    ApiProp.Num({
      ent: Entity.Guitar,
      prop: Property.MaxPrice,
      extra: {example: 900000, default: 1000000}
    })
  )
  public maxPrice?: number;


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

  @Expose()
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional(
    ApiProp.Comm({
      ent: Entity.Guitar,
      prop: Property.Limit,
      extra: { default: Limit.Items },
    })
  )
  public limit?: number = Limit.Items
}
