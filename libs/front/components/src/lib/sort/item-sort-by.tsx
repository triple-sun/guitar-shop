import { SortBy } from "@guitar-shop/front/enums"
import { MouseEvent } from "react"

type TSortByProps = {
  handleChange:(sortBy: SortBy) => void;
  sortBy: SortBy;
  forItemList?: boolean;
}

export const ItemSortByElement = ({handleChange, sortBy, forItemList = false}: TSortByProps) => {
  const sortByClass = 'catalog-sort__type-button'
  const sortByActiveClass = `${sortByClass} catalog-sort__type-button--active`

  const onSortByPriceClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleChange(SortBy.Price)}
  const onSortByReviewsClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleChange(SortBy.Reviews)}
  const onSortByDateClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleChange(SortBy.Date)}

  return (
    <div className="catalog-sort__type">
      {forItemList
        ? <button className={sortBy === SortBy.Price ? sortByActiveClass : sortByClass} aria-label="по дате" onClick={onSortByDateClick}>по дате</button>
        : null
      }

      <button className={sortBy === SortBy.Price ? sortByActiveClass : sortByClass} aria-label="по цене" onClick={onSortByPriceClick}>по цене</button>
      <button className={sortBy === SortBy.Reviews ? sortByActiveClass : sortByClass} aria-label="по популярности" onClick={onSortByReviewsClick}>по популярности</button>
      </div>
  )
}


