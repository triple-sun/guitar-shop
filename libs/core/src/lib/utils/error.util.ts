import { IMessageProps } from "@guitar-shop/shared-types"
import { capitalize } from "./common.util"

export const getNotFoundMessage = (
({service, property}: IMessageProps) => ((
    value?: string | number,
    args?: IMessageProps
  ) => (`
    ${capitalize(service  || args.service
      ? `${service ?? args.service} with`
      : ''
    )}
    ${(property || args.property)
      ? ` ${property ?? args.property}:`
      : ''
    } value ${
        value ?? args.value
    } not found.
  `))
)

export const getExistsMessage = (
({service, property}: IMessageProps) => ((
    value: string | number,
    args?: IMessageProps
  ) => (`${capitalize(service ?? args.service ?? '')} ${property || args.property ? `with ${property ?? args.property}` : ''} ${value ?? args.value} already exists.`))
)

export const getInvalidMessage = (
({service, property}: IMessageProps) => ((
    args?: IMessageProps
  ) => (`
    ${args.value} is not valid
    ${property || args.property
      ? ` for property ${property ?? args.property}`
      : ''}
    ${service ? ` of ${service}` : '.'}
  `))
)

export const getENVErrorMessage = (
  {value, targetName, property}: IMessageProps
) => `${targetName} ${property.toLowerCase().replace(/_/g, " ")} is required. Current value: ${value}`

export const getLengthErrorMessage = ({property, constraints, value}: IMessageProps) => (`${property} length must be ${
    constraints[1]
      ? `no more than ${constraints[1]}`
      : ''
  } ${
    constraints[0] && constraints[1]
      ? 'and'
      : ''
  } ${
    constraints[0]
      ? `no less than ${constraints[0]}`
      : ''
  } symbols. Provided ${property} ${value} is ${value.length} symbols long.`)
