import { GuitarType, StringCount } from "@prisma/client"
import { FilterPriceComponent } from "./filter-price"
import { FilterStringCountElement } from "./filter-strings-element"
import { FilterGuitarTypeElement } from "./filter-type-element"

export const FilterComponent = () => {
  return (
  <form className="catalog-filter">
    <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
    <FilterPriceComponent />
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      {Object.values(GuitarType).map((type) => <FilterGuitarTypeElement type={GuitarType[type]} key={type} />)}
    </fieldset>
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      {Object.values(StringCount).map((count) => <FilterStringCountElement count={StringCount[count]} key={count} />)}
    </fieldset>
    <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
  </form>
  )
}
