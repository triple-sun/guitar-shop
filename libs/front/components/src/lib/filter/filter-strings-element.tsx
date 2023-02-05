import { useItems } from "@guitar-shop/front/hooks";
import { StringCount } from "@prisma/client"
import { FormEvent } from "react";

export const StringCountToNumber = {
  [StringCount.Four]: 4,
  [StringCount.Six]: 6,
  [StringCount.Seven]: 7,
  [StringCount.Twelve]: 12
};

type TFilterStringCountElementProps = {
  count: StringCount
}

export const FilterStringCountElement = ({count}: TFilterStringCountElementProps) => {
  const { handleStringsCountInput, selectedCounts } = useItems()

  const countNumber = StringCountToNumber[count]
  const countType = `${countNumber}-strings`

  const onTypeInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    handleStringsCountInput(count)
  }

  return (
    <div className="form-checkbox catalog-filter__block-item" key={countType}>
      <input onChange={onTypeInput} className="visually-hidden" type="checkbox" id={countType} name={countType} checked={selectedCounts.includes(count)}></input>
      <label htmlFor={countType}>{countNumber}</label>
    </div>
  )
}
