import { faker } from '@faker-js/faker'
import { Property } from '../enums/property.enum'
import { IGuitar } from '../interfaces/guitar.interface'
import { getCommonApiExamples, getNumApiExamples, getStrApiExamples } from './api.util'

const { Model, Description, Type, Photo, Sku, Strings, Price, CreatedAt, UpdatedAt } = Property

export const createGuitar = (sku: string): IGuitar => {
  const createdAt = faker.date.recent(100)
  const commMocks = getCommonApiExamples()
  const strMocks = getStrApiExamples()
  const numMocks = getNumApiExamples()

  return {
  [Sku]: sku,
  [Description]: strMocks[Description],
  [Model]: strMocks[Model],
  [CreatedAt]: createdAt,
  [UpdatedAt]: faker.date.between(createdAt, new Date()),
  [Photo]: commMocks[Photo],
  [Strings]: commMocks[Strings],
  [Type]:  commMocks[Type],
  [Price]: numMocks[Price]
}}

export const createMockGuitars = (count: number): IGuitar[] => {
    const skus = faker.helpers.uniqueArray<string>((() => getStrApiExamples()[Sku]), count)

    return skus.map((sku) => createGuitar(sku))
}
