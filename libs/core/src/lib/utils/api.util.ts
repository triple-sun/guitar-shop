import { ApiPropertyOptions } from "@nestjs/swagger"
import { Size } from "../consts/size.const"
import { Property } from "../enums/property.enum"
import { Entity } from "../enums/utils.enum"
import { TApiPropArgs } from "../types/api-prop-args.type"

export const getConstraints = (prop: string, type?: string) => {
  if (Size[prop]) {
    const max = Size[prop].Max ?? null
    const min = Size[prop].Min ?? null

    switch (true) {
      case !max || !type:
        return {}
      case type === 'number':
        return { maximum: max, minimum: min }
      case type === 'array':
        return { maxItems: max }
      case type ==='string':
        return { maxLength: max, minLength: min }
      default:
        return {}
    }
  }
}

export const getPropDescription = (ent: Entity, prop: Property) => `${ent} ${prop.replace(/([A-Z])/g, ' $1').toLowerCase()}`

export const getApiProp = ({ent, prop, extra}: TApiPropArgs, type?: string): ApiPropertyOptions => {
  console.log({prop})
  return { name: prop, description: getPropDescription(ent, prop), ...(type ? getConstraints(prop, type) : {}), ...extra}}
