import { Property } from "@guitar-shop/shared-types"

const getSize = (max: number, min: number) => ({ Max: max, Min: min })

export const Size = {
  [Property.Name]: getSize(15, 1),
  [Property.Password]: getSize(12, 6),
  [Property.Title]: getSize(100, 10),
  [Property.Desc]: getSize(1024, 20),
  [Property.Sku]: getSize(40, 5),
  [Property.Price]: getSize(1000000, 100),
  [Property.Pros]: getSize(100, 50),
  [Property.Cons]: getSize(100, 50),
  [Property.Rating]: getSize(5, 1),
  [Property.Comment]: getSize(1024, 5),
  [Property.Comment]: getSize(300, 10),
  [Property.TotalRating]: getSize(5, 0),
  [Property.Port]: getSize(65535, 0)
}

export const getConstraints = (prop: string, type?: string) => {
  if (Size[prop]) {
    const max = Size[prop].Max ?? null
    const min = Size[prop].Min ?? null

    switch (true) {
      case !max || !type:
        return {}
      case type === 'number':
        return { maximum: max, minimum: min }
      case type === 'array':
        return { maxItems: max }
      case type ==='string':
        return { maxLength: max, minLength: min }
      default:
        return {}
    }
  }
}
