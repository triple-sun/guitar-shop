import { ValidationArguments } from "class-validator";
import { ErrorType } from "../enums/error-type.enum";
import { Property } from "../enums/property.enum";
import { Entity } from "../enums/utils.enum";

export interface IMessageProps extends Partial<Pick<ValidationArguments, 'constraints' | 'value' | 'targetName'>> {
  type?: ErrorType,
  entity?: Entity,
  property: Property | string
}
