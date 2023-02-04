import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isAfter, isBefore } from 'date-fns'
import { Property } from '../enums/property.enum';

export const ValidateOrderPriceFilter = (validationOptions?: ValidationOptions) => {
  return (object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: string, {property, object}: ValidationArguments) {
          switch (property) {
            case (Property.MinPrice):
              return value < object[Property.MaxPrice]
            case (Property.MaxPrice):
              return value > object[Property.MinPrice]
            }
          },
        defaultMessage({property}: ValidationArguments) {
          switch (property) {
            case (Property.MinPrice):
              return `Minimum price should be smaller than maximum price!`
            case (Property.MaxPrice):
              return `Maximum price should be larger than minimum price!`
            }
        }
      },
    });
  };
}

export const ValidateOrderDateFilter = (validationOptions?: ValidationOptions) => {
  return (object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: Date, {property, object}: ValidationArguments) {
          const today = new Date();
          switch (property) {
            case (Property.EndDate):
              return object[Property.StartDate] ? isAfter(value, object[Property.StartDate]) : isBefore(value, today)
            case (Property.StartDate):
              return object[Property.EndDate] ? isBefore(value, object[Property.EndDate]) : isBefore(value, today)
            }
          },
        defaultMessage({property}: ValidationArguments) {
          switch (property) {
            case (Property.StartDate):
              return `Start date should be after end date.`
            case (Property.EndDate):
              return `End date should be after the start date or today.`
            }
        }
      },
    });
  };
}

