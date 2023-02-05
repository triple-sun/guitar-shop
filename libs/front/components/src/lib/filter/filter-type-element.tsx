import { useItems } from "@guitar-shop/front/hooks"
import { GuitarType } from "@prisma/client"
import { FormEvent } from "react"
import { GuitarTypeTranslate } from "../cart-item-element/cart-item-element"

type TFilterGuitarTypeElementProps = {
  type: GuitarType
}

export const FilterGuitarTypeElement = ({type}: TFilterGuitarTypeElementProps) => {
  const { handleGuitarTypeInput, selectedTypes } = useItems()

  const itemType = type.toLowerCase()
  const title = GuitarTypeTranslate[type]
    .replace('ая', 'ие')
    .replace('ара', 'ары')

  const onTypeInput = (evt: FormEvent<HTMLInputElement>) => {
    evt.preventDefault()
    handleGuitarTypeInput(type)
  }

  return (
    <div className="form-checkbox catalog-filter__block-item" key={type}>
      <input onChange={onTypeInput} className="visually-hidden" type={itemType} id={itemType} name={itemType} checked={selectedTypes.includes(type)} value={type}></input>
      <label htmlFor="acoustic">{title}</label>
    </div>
  )
}
