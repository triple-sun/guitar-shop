import { ApiProp, Entity, Property, ValidateOrderDateFilter, ValidateOrderPriceFilter } from "@guitar-shop/core";
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsDate, IsInt, IsOptional, ValidateIf } from "class-validator";

const { Page, MinPrice, MaxPrice, StartDate, EndDate} = Property

export class OrderQueryDto {
  @ApiPropertyOptional(ApiProp.Common({ent: Entity.Order, prop: Property.Page, extra: { default: 1, minimum: 1 }}))
  public [Page]?: number

  @IsOptional()
  @IsInt()
  @ValidateOrderPriceFilter()
  @ApiPropertyOptional(ApiProp.Int({ ent: Entity.Order, prop: Property.MinPrice }))
  public [MinPrice]?: number;

  @IsOptional()
  @IsInt()
  @ValidateOrderPriceFilter()
  @ApiPropertyOptional(ApiProp.Int({ ent: Entity.Order, prop: Property.MaxPrice }))
  public [MaxPrice]?: number;

  @IsOptional()
  @IsDate()
  @ValidateIf(o => o.EndDate || o.StartDate !== new Date)
  @ValidateOrderDateFilter()
  @ApiPropertyOptional(ApiProp.Common({ ent: Entity.Order, prop: Property.StartDate, extra: {type: Date} }))
  public [StartDate]?: Date;

  @IsOptional()
  @IsDate()
  @ValidateIf(o => o.StartDate || o.EndDate !== new Date)
  @ValidateOrderDateFilter()
  @ApiPropertyOptional(ApiProp.Common({ ent: Entity.Order, prop: Property.EndDate, extra: {type: Date} }))
  public [EndDate]?: Date
}
