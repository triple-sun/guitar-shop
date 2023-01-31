import { faker } from '@faker-js/faker'
import { ApiExample } from '../consts/api.const'
import { Size } from '../consts/size.const'
import { Property } from '../enums/property.enum'
import { IGuitar } from '../interfaces/guitar.interface'

const { Model, Description, Type, Photo, Sku, Strings, Price, CreatedAt, UpdatedAt } = Property

export const createGuitar = (sku: string): IGuitar => ({
  [Sku]: sku,
  [Description]: ApiExample.Str[Description],
  [Model]: ApiExample.Str[Model],
  [CreatedAt]: faker.date.recent(100),
  [UpdatedAt]: faker.date.recent(730),
  [Photo]: `/markup/img/content/catalog-product-${faker.datatype.number({min: 0, max: 8})}.png`,
  [Strings]: ApiExample[Strings],
  [Type]:  ApiExample[Type],
  [Price]: ApiExample.Num[Price]
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
