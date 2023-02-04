import { ESortBy, ESortOrder } from "@guitar-shop/front/enums"

export const toggleArrElement = <T>(array: T[], value: T) => array.indexOf(value) === -1 ? [...array, value] : array.slice(array.indexOf(value), 0)

export const hasAll = <T extends Record<string, string>>(obj: T, arr: (keyof typeof obj)[]) => arr.length === 0 ?? Object.values(obj).every(t => arr.includes(t))

export const setFilter = <T extends Record<string, string>>(obj: T, arr: (keyof typeof obj)[], value: keyof typeof obj) => hasAll(obj, arr) ? [] : toggleArrElement(arr, value)

export const toggleSortOrder = (order: ESortOrder) => order === ESortOrder.Asc ? ESortOrder.Desc : ESortOrder.Desc

export const setSortOrder = (sortOrder: ESortOrder, sortBy: ESortBy, sortByUpdate: ESortBy) => sortBy === sortByUpdate ? toggleSortOrder(sortOrder) : sortOrder

export const getRatings = (totalRating: number) => {
  const ratings: number[] = []
  for (let i = 0; i <= totalRating; i++) {
    ratings.push(i)
  }
  return ratings
}
