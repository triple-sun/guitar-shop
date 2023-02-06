import { SortBy, SortOrder, Rating } from "@guitar-shop/front/enums"
import { TFetchItemsQuery, TGuitar, TGuitarTypeFilter, TStringCountFilter } from "@guitar-shop/front/types"


export const toggleArrElement = <T>(array: T[], value: T) => array.indexOf(value) === -1 ? [...array, value] : array.slice(array.indexOf(value), 0)

export const toggleSortOrder = (order: SortOrder) => order === SortOrder.Asc ? SortOrder.Desc : SortOrder.Desc

export const setSortOrder = (sortOrder: SortOrder, sortBy: SortBy, sortByUpdate: SortBy) => sortBy === sortByUpdate ? toggleSortOrder(sortOrder) : sortOrder

const ratingToArray = (totalRating: number) => {
  const ratings: number[] = []
  for (let i = 0; i <= totalRating; i++) {
    ratings.push(i)
  }
  return ratings
}

const getRating = (totalRating: number) => {
  switch (true) {
    case totalRating === 5:
      return Rating.Perfect
    case totalRating > 4:
      return Rating.Great
    case totalRating > 3:
      return Rating.OK
    case totalRating > 2:
      return Rating.Bad
    case totalRating < 2:
      return Rating.Awful
  }
}

export const getRatingStringAndArray = (totalRating: number) => ({
  ratingArray: ratingToArray(totalRating),
  ratingString: getRating(totalRating)
})

export const getHeaderClass = (isAuth: boolean, isAdmin: boolean | undefined, itemsCount: number) => {
    switch(true) {
      case !isAuth:
        return 'header'
      case isAuth && isAdmin:
        return 'header--admin header'
      case isAuth && isAdmin && itemsCount === 0:
        return 'header--admin-empty header'
      case isAuth && !isAdmin:
        return 'header--logged header'
      case isAuth && !isAdmin && itemsCount === 0:
        return 'header--logged-empty header'
    }
  }

export const getIndexes = (cart: number[]) =>  {
  const result: number[] = []

  cart.forEach((count, index) => {
    if (count > 0) {
      result.push(index)
    }
  })
  return result
}

export const getTotalPrice = (items: {item: TGuitar, count: number}[]) => {
  return items.length > 0 ? items.map((item) => item.count * item.item.price).reduce((a: number, b: number) => a + b) : 0
}

const getStringsQuery = (strings: TStringCountFilter) => {
  const query: string[] = []
  Object.keys(strings)
    .forEach((value) => {
      const key = value as keyof TStringCountFilter
      return strings[key] ? query.push(`strings=${key}`) : null
    })
  return query.join('&')
}


const getTypesQuery = (types: TGuitarTypeFilter) => {
  const query: string[] = []
  Object.keys(types)
    .forEach((value) => {
      const key = value as keyof TGuitarTypeFilter
      return types[key] ? query.push(`types=${key}`) : null
    })
  return query.join('&')
}

export const getFetchCatalogQueryString = (query: TFetchItemsQuery) => {
  const {sortBy, sortOrder, page, minPrice, maxPrice, strings, types} = query

  const allCounts: TStringCountFilter = {
    Four: true, Six: true,
    Seven: true, Twelve: true
  }

  const allTypes: TGuitarTypeFilter = {
    Electric: true, Acoustic: true, Ukulele: true
  }

  const stringsQuery = Object.values(strings).every((value) => value === true) || Object.values(strings).every((value) => value === false) ? getStringsQuery(allCounts) : getStringsQuery(strings)
  const typeQuery = Object.values(types).every((value) => value === true) || Object.values(types).every((value) => value ===  false) ? getTypesQuery(allTypes) : getTypesQuery(types)

  return `${stringsQuery}&${typeQuery}&minPrice=${minPrice ? minPrice : 100}&maxPrice=${maxPrice ? maxPrice : 1000000}&sortBy=${sortBy ? sortBy : SortBy.Date}&sortOrder=${sortOrder ? sortOrder : SortOrder.Asc}&page=${page ? page : 1}`
}

export const formatOrderId = (id: number): string => {
  const padded: string[] = Object.values(id.toString())
  while (padded.length < 8) padded.unshift('0')

  return padded.join('').replace(/(\d{2})(\d{3})(\d+)/, '$1-$2-$3')
}
