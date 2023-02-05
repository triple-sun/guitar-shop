import { useItems } from "@guitar-shop/front/hooks"
import { FormEvent } from "react"

export const FilterPriceComponent = () => {
  const { handleMinPriceInput, handleMaxPriceInput, minPrice, maxPrice } = useItems()

  const onMinPriceChange = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    handleMinPriceInput(evt.currentTarget.valueAsNumber)
  }

  const onMaxPriceChange = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    handleMaxPriceInput(evt.currentTarget.valueAsNumber)
  }

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
            <input onChange={onMinPriceChange} type="number" placeholder="1 000" id="priceMin" name="от" value={minPrice ?? ''}></input>
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input onChange={onMaxPriceChange} type="number" placeholder="30 000" id="priceMax" name="до" value={maxPrice ?? ''}></input>
        </div>
      </div>
    </fieldset>
  )
}
