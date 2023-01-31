import { ApiPropertyOptions } from "@nestjs/swagger"
import { ApiExample } from "../consts/api.const"
import { Size } from "../consts/size.const"
import { Property } from "../enums/property.enum"
import { Entity, PropType } from "../enums/utils.enum"
import { TApiPropArgs } from "../types/api-prop-args.type"

const { Num, Str } = PropType

export const getConstraints = (prop: string, type?: PropType) => {
  if (Size[prop]) {
    const max = Size[prop].Max ?? null
    const min = Size[prop].Min ?? null

    switch (true) {
      case !max || !type:
        return {}
      case type === Num:
        return { maximum: max, minimum: min }
      case type === Str:
        return { maxLength: max, minLength: min }
      default:
        return {}
    }
  }
}

export const getExample = (prop: Property, type: PropType) => ApiExample[type][prop] ? {example: ApiExample[type][prop]} : {}

export const getDescription = (ent: Entity, prop: Property) => `${ent} ${prop.replace(/([A-Z])/g, ' $1').toLowerCase()}`

export const getApiProp = ({ent, prop, extra}: TApiPropArgs, type?: PropType): ApiPropertyOptions => {
  return { name: prop, description: getDescription(ent, prop), ...getConstraints(prop, type), ...getExample(prop, type), ...extra}}
