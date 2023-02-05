import { FilterPriceComponent } from "./filter-price"
import { FilterStringCountComponent } from "./filter-strings"
import { FilterGuitarTypeComponent } from "./filter-type"

export const FilterComponent = () => {
  return (
  <form className="catalog-filter">
    <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
    <FilterPriceComponent />
    <FilterGuitarTypeComponent />
    <FilterStringCountComponent />
    <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
  </form>
  )
}
