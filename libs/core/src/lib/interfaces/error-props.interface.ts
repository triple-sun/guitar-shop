import { ValidationArguments } from "class-validator";
import { ErrorType } from "../enums/error-type.enum";
import { Property } from "../enums/property.enum";
import { Service } from "../enums/utils.enum";

export interface IMessageProps extends Partial<ValidationArguments> {
  type?: ErrorType,
  service?: Service,
  property?: Property | string
}
