import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { Size } from '../utils/size.util';
import { getLengthErrorMessage } from '../utils/error.util';
import { capitalize } from '../utils/common.util';

export const ValidateLength = (validationOptions?: ValidationOptions) => {
  return (object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, {property}: ValidationArguments) {
          const prop = capitalize(property)

          const result = (value.length >= Size[prop]?.Min) && (value.length <= Size[prop]?.Max)

          return result
        },
        defaultMessage(args: ValidationArguments) {
          const prop = capitalize(args.property)

          const constraints = [Size[prop].Min]

          if ( Size[prop].Max ) {
            constraints.push(Size[prop].Max)
          }

          return getLengthErrorMessage({...args, constraints})
        }
      },
    });
  };
}
