import { faker } from "@faker-js/faker";
import { GuitarType, StringCount } from "@prisma/client";
import { MockManufacturer, MockModel } from "../enums/mock.enum";
import { Property } from "../enums/property.enum";
import { PropType } from "../enums/utils.enum";
import { TApiPropArgs } from "../types/api-prop-args.type";
import { getApiProp } from "../utils/api.util";
import { Size } from "./size.const";

const { Id, Email, Pros, Cons, Comment, Rating, Description, Model, UserId, OrderId, ItemId, Password, Price, Name, Sku, Strings, Type, ItemIds } = Property
const { Num, Str, Comm } = PropType

export const ApiProp = {
  Common: (args: TApiPropArgs) => getApiProp(args, PropType.Comm),
  Str: (args: TApiPropArgs) => getApiProp(args, PropType.Str),
  Int: (args: TApiPropArgs) => getApiProp(args, PropType.Num)
}

export enum StringCountNumber {
  Four = 4,
  Six = 6,
  Seven = 7,
  Twelve = 12
}

export const StringNumberToCount = {
  [StringCountNumber.Four]: StringCount.Four,
  [StringCountNumber.Six]: StringCount.Six,
  [StringCountNumber.Seven]: StringCount.Seven,
  [StringCountNumber.Twelve]: StringCount.Twelve
}

export const ApiExample = {
  [Comm]:{
    [Email]: faker.internet.email(),
    [Type]:  GuitarType[faker.helpers.arrayElement(Object.keys(GuitarType))],
    [Strings]: StringCount[faker.helpers.arrayElement(Object.keys(StringCount))]},
    [ItemIds]: faker.helpers.uniqueArray(() => faker.datatype.number({max: 10}), 5),
    [Id]: 3,
    [UserId]: 3,
    [ItemId]: 3,
    [OrderId]: 3,
  [Num]: {
    [Price]: faker.datatype.number({min: Size[Price].Min, max: Size[Price].Max}),
    [Rating]: faker.datatype.number({min: Size[Rating].Min, max: Size[Rating].Max}),
  },
  [Str]: {
    [Pros]: faker.random.alpha(Size[Pros].Min),
    [Cons]: faker.random.alpha(Size[Cons].Min),
    [Comment]: faker.random.alpha(Size[Comment].Min),
    [Password]: faker.random.alphaNumeric(Size[Password].Min),
    [Description]: faker.random.alpha(Size[Description].Min),
    [Model]: `${faker.helpers.arrayElement(Object.values(MockManufacturer))} ${faker.helpers.arrayElement(Object.values(MockModel))}`,
    [Name]: faker.name.firstName(),
    [Sku]: faker.random.alphaNumeric(Size[Sku].Min)
  }
}

export const IMAGE_MIME_TYPES = ['image/jpeg', 'image/png']
