import { SortOrder } from "@guitar-shop/front/enums"
import { MouseEvent } from "react"

type TSortOrderProps = {
  handleChange: (order: SortOrder) => void
  sortOrder: SortOrder
}

export const ItemSortOrderElement = ({handleChange, sortOrder}: TSortOrderProps) => {
  const onSortOrderUpClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleChange(SortOrder.Asc)}
  const onSortOrderDownClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleChange(SortOrder.Desc)}

  return (
    <div className="catalog-sort__order">
      <button className={`catalog-sort__order-button ${sortOrder === SortOrder.Asc ? 'catalog-sort__order-button--active' : ''} catalog-sort__order-button--up`} aria-label="По возрастанию" onClick={onSortOrderUpClick}></button>
      <button className={`catalog-sort__order-button ${sortOrder === SortOrder.Desc ? 'catalog-sort__order-button--active' : ''} catalog-sort__order-button--down`} aria-label="По убыванию" onClick={onSortOrderDownClick}></button>
    </div>
  )
}

