import { faker } from "@faker-js/faker";
import { GuitarType, StringCount } from "@prisma/client";
import { MockManufacturer, MockModel } from "../enums/mock.enum";
import { ApiPropertyOptions } from "@nestjs/swagger"
import { Size } from "../consts/size.const"
import { Property } from "../enums/property.enum"
import { Entity, PropType } from "../enums/utils.enum"
import { TApiPropArgs, ICommExamples, TNumExamples, TStrExamples } from "../types/api-prop.type"

const { Id, Email, Pros, Cons, Comment, Rating, Description, Model, ItemId, Password, Price, Name, Sku, Strings, Type, ItemIds, Page, TotalPrice, TotalRating, Count, Photo, CreatedAt, OrderPrice } = Property
const { Num, Str, Comm } = PropType

export const getPropSize = (prop: Property) => faker.datatype.number({min: Size[prop]?.Min, max: Size[prop]?.Max})

export const ApiProp = {
  [Comm]: (args: TApiPropArgs) => getApiProp(Comm, args),
  [Str]: (args: TApiPropArgs) => getApiProp(Str, args),
  [Num]: (args: TApiPropArgs) => getApiProp(Num, args)
}

export const getCommonApiExamples = (): ICommExamples => {
  const type = GuitarType[faker.helpers.arrayElement(Object.keys(GuitarType))];
  const strings = StringCount[faker.helpers.arrayElement(Object.keys(StringCount))];

  return {
    [Id]: faker.datatype.number({min: 1, max: 5}),
    [Email]: faker.internet.email(),
    [Type]:  type,
    [Strings]: strings,
    [ItemIds]: faker.helpers.uniqueArray(() => faker.datatype.number({max: 20}), faker.datatype.number(10)),
    [ItemId]: faker.datatype.number({min: 1, max: 20}),
    [Photo]: `/markup/img/content/catalog-product-${faker.datatype.number({min: 0, max: 8})}.png`,
    [CreatedAt]: new Date,
    [Page]: 1,
}}

export const getStrApiExamples = (): TStrExamples => {
  const model = `${faker.helpers.arrayElement(Object.values(MockManufacturer))} ${faker.helpers.arrayElement(Object.values(MockModel))}`;
  const description = faker.random.alpha(getPropSize(Description));
  const sku = faker.random.alphaNumeric(getPropSize(Sku));

  return {
    [Pros]: faker.random.alpha(getPropSize(Pros)),
    [Cons]: faker.random.alpha(getPropSize(Cons)),
    [Comment]: faker.random.alpha(getPropSize(Comment)),
    [Password]: faker.random.alphaNumeric(getPropSize(Password)),
    [Name]: faker.name.firstName(),
    [Model]: model,
    [Description]: description,
    [Sku]: sku
  }}

export const getNumApiExamples = (): TNumExamples => {
  const itemCount = faker.datatype.number({min: 1, max: 10})
  const itemPrice = getPropSize(Price)
  const itemRating = getPropSize(Rating)

  return {
    [Price]: itemPrice,
    [Rating]: itemRating,
    [Count]: itemCount,
    [TotalPrice]: itemCount * itemPrice,
    [TotalRating]: faker.datatype.number({min: itemRating, max: 5}),
    [OrderPrice]: itemCount * itemPrice
}}

export const ApiExamples = {
  [Comm]: getCommonApiExamples(),
  [Num]: getNumApiExamples(),
  [Str]: getStrApiExamples()
}

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

export const getExample = (prop: Property, type: PropType) => {
  console.log(ApiExamples[type][prop])
  return ApiExamples[type][prop] ? { example: ApiExamples[type][prop] ?? '' } : {}
}

export const getDescription = (ent: Entity, prop: Property) => `${ent} ${prop.replace(/([A-Z])/g, ' $1').toLowerCase()}`

export const getApiProp = (type: PropType, {ent, prop, extra}: TApiPropArgs): ApiPropertyOptions => {
  return { name: prop, description: getDescription(ent, prop), ...getConstraints(prop, type), ...getExample(prop, type), ...extra}}
