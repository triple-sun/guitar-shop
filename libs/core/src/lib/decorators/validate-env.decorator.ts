import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { Size } from '../consts/size.const';
import { Property } from '../enums/property.enum';
import { getENVErrorMessage } from '../utils/error.util';

export const ValidateENVProp = (validationOptions?: ValidationOptions) => {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          return !!value
        },
        defaultMessage(args: ValidationArguments) {
          return getENVErrorMessage(args)
        }
      },
    });
  };
}

export const ValidateENVPort = (validationOptions?: ValidationOptions) => {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
            return typeof value  === 'number' && value <= Size[Property.Port].Max && value > Size[Property.Port].Min
        },
        defaultMessage(args: ValidationArguments) {
            return getENVErrorMessage(args)
        }
      },
    });
  };
}
