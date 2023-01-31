import { ApiPropertyOptions } from "@nestjs/swagger"
import { Property } from "../enums/property.enum"
import { Entity } from "../enums/utils.enum"

export type TApiPropArgs = {
  ent: Entity,
  prop: Property,
  extra?: ApiPropertyOptions
}
