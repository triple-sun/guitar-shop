import { useCatalog } from "@guitar-shop/front/hooks"
import { FormEvent, PropsWithChildren } from "react"

export const FiltersComponent = ({children}: PropsWithChildren) => {
  const { handleFiltersReset: handleResetFilters } = useCatalog()

  const onFormReset= (evt: FormEvent<HTMLFormElement>) => {handleResetFilters()}

  return (
  <form className="catalog-filter" onReset={onFormReset}>
    <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
    {children}
    <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
  </form>
  )
}
