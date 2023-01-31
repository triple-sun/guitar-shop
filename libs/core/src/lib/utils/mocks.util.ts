import { faker } from '@faker-js/faker'
import { GuitarType, StringCount } from '@prisma/client'
import { Size } from '../consts/size.const'
import { MockManufacturer, MockModel } from '../enums/mock.enum'
import { Property } from '../enums/property.enum'
import { IGuitar } from '../interfaces/guitar.interface'

const { Model, Description, Type, Photo, Sku, Strings, Price, CreatedAt, UpdatedAt } = Property

export const createGuitar = (sku: string): IGuitar => ({
  [Sku]: sku,
  [Description]: faker.commerce.productDescription().slice(0, 1025),
  [Model]: `${faker.helpers.arrayElement(Object.values(MockManufacturer))} ${faker.helpers.arrayElement(Object.values(MockModel))}`,
  [CreatedAt]: faker.date.recent(100),
  [UpdatedAt]: faker.date.recent(730),
  [Photo]: `/markup/img/content/catalog-product-${faker.datatype.number({min: 0, max: 8})}.png`,
  [Strings]: StringCount[faker.helpers.arrayElement(Object.keys(StringCount))],
  [Type]:  GuitarType[faker.helpers.arrayElement(Object.keys(GuitarType))],
  [Price]: parseInt(faker.commerce.price(100, 1000000))
})

export const createMockGuitars = (count: number): IGuitar[] => {
    const skus = faker.helpers.uniqueArray(
      () => faker.random.alphaNumeric(
        faker.datatype.number({
          min: Size[Sku].Min,
          max: Size[Sku].Max
        })
      ),
      count
    )

    return skus.map((sku) => createGuitar(sku))
}
