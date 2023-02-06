import { StringCount } from "@prisma/client"
import { FilterStringCountElement } from "./filter-strings-element"

export const FilterStringCountComponent = () => {

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
        {Object.values(StringCount).map((count) => <FilterStringCountElement count={StringCount[count]} key={count} />)}
    </fieldset>
)}
