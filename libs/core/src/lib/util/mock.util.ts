import { faker } from '@faker-js/faker'
import { IGuitar, MockManufacturer, MockModel } from '@guitar-shop/shared-types'
import { GuitarType, StringCount } from '@prisma/client'

export const createGuitar = ({id, sku}: {id: number, sku: string}): IGuitar => ({
  id,
  sku,
  desc: faker.commerce.productDescription().slice(0, 1025),
  name: `${faker.helpers.arrayElement(Object.values(MockManufacturer))} ${faker.helpers.arrayElement(Object.values(MockModel))}`,
  createdAt: faker.date.recent(730),
  photo: `/markup/img/content/catalog-product-${faker.datatype.number({min: 0, max: 8})}.png`,
  strings: StringCount[faker.helpers.arrayElement(Object.keys(StringCount))],
  type:  GuitarType[faker.helpers.arrayElement(Object.keys(GuitarType))],
  rating: 0,
  price: parseInt(faker.commerce.price(100, 1000000))
})

export const createMockGuitars = (count: number) => {
    const skus = faker.helpers.uniqueArray(faker.datatype.uuid, count)

    return skus.map((sku, index) => createGuitar({id: index, sku}))
}
