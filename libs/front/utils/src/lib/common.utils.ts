import { ESortBy, ESortOrder, Rating } from "@guitar-shop/front/enums"
import { TGuitar } from "@guitar-shop/front/types"

export const toggleArrElement = <T>(array: T[], value: T) => array.indexOf(value) === -1 ? [...array, value] : array.slice(array.indexOf(value), 0)

export const hasAll = <T extends Record<string, string>>(obj: T, arr: (keyof typeof obj)[]) => arr.length === 0 ?? Object.values(obj).every(t => arr.includes(t))

export const setFilter = <T extends Record<string, string>>(obj: T, arr: (keyof typeof obj)[], value: keyof typeof obj) => hasAll(obj, arr) ? [] : toggleArrElement(arr, value)

export const toggleSortOrder = (order: ESortOrder) => order === ESortOrder.Asc ? ESortOrder.Desc : ESortOrder.Desc

export const setSortOrder = (sortOrder: ESortOrder, sortBy: ESortBy, sortByUpdate: ESortBy) => sortBy === sortByUpdate ? toggleSortOrder(sortOrder) : sortOrder

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

export const handleTotalRating = (totalRating: number) => ({
  ratings: ratingToArray(totalRating),
  rating: getRating(totalRating)
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
