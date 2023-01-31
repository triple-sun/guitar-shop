import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { Size } from '../consts/size.const';
import { getLengthErrorMessage } from '../utils/error.util';

export const ValidateLength = (validationOptions?: ValidationOptions) => {
  return (object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, {property}: ValidationArguments) {
          const result = (value.length >= Size[property].Min) && (value.length <= Size[property].Max)

          return result
        },
        defaultMessage(args: ValidationArguments) {
          const constraints = [Size[args.property]?.Min]

          if ( Size[args.property]?.Max ) {
            constraints.push(Size[args.property].Max)
          }

          return getLengthErrorMessage({...args, constraints})
        }
      },
    });
  };
}
