import { Property } from '@guitar-shop/shared-types';
import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { getENVErrorMessage } from '../utils/error.util';
import { Size } from '../utils/size.util';

export const ValidateENVProp = (validationOptions?: ValidationOptions) => {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value) {
          console.log(value)
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
        validate(value, args: ValidationArguments) {
          console.log(args)
            return typeof value  === 'number' && value <= Size[Property.Port].Max && value > Size[Property.Port].Min
        },
        defaultMessage(args: ValidationArguments) {
            return getENVErrorMessage(args)
        }
      },
    });
  };
}
