import { useItems } from "@guitar-shop/front/hooks"
import { FormEvent } from "react"
import { StringCount } from "@prisma/client"

const counts = Object.values(StringCount)

const CountToItems = {
  [StringCount.Four]: 4,
  [StringCount.Six]: 6,
  [StringCount.Seven]: 7,
  [StringCount.Twelve]: 12
};

export const FilterStringCountComponent = () => {
  const { handleStringsCountInput, stringCounts } = useItems()

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
        {counts.map((count) => {
          const countNumber = CountToItems[count]
          const countType = `${countNumber}-strings`
          const onTypeInput = (evt: FormEvent<HTMLInputElement>) => {
            evt.preventDefault()
            handleStringsCountInput(count)
          }

          return (
            <div className="form-checkbox catalog-filter__block-item" key={countType}>
              <input onChange={onTypeInput} className="visually-hidden" type="checkbox" id={countType} name={countType} checked={stringCounts.includes(count)}></input>
              <label htmlFor={countType}>{countNumber}</label>
            </div>
          )
        })}
    </fieldset>
)}
