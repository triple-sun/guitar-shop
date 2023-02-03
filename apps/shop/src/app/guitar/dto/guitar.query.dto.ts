import { ApiProp, Entity, Property } from "@guitar-shop/core";
import { ApiPropertyOptional, PartialType, PickType } from "@nestjs/swagger";
import { GuitarType, StringCount } from "@prisma/client";
import { Expose } from "class-transformer";
import { IsIn, IsInt, IsOptional } from "class-validator";
import { CreateGuitarQuery} from "./create-guitar.dto";

const { Strings, Type } = Property

export class GuitarQueryDto extends PartialType(PickType(CreateGuitarQuery, [Property.Strings, Property.Type] as const)) {
  @Expose()
  @IsOptional()
  @IsInt()
  @ApiPropertyOptional(ApiProp.Common({ent: Entity.Guitar, prop: Property.Page, extra:  {default: 1 }}))
  public page?: number;

  @Expose()
  @IsOptional()
  @IsIn(Object.values(StringCount))
  @ApiPropertyOptional(ApiProp.Common({ent: Entity.Guitar, prop: Strings, extra: { enum: StringCount }}))
  public [Strings]: StringCount;

  @Expose()
  @IsOptional()
  @IsIn(Object.values(GuitarType))
  @ApiPropertyOptional(ApiProp.Common({ent: Entity.Guitar, prop: Type, extra: { enum: GuitarType }}))
  public [Type]: GuitarType
}
