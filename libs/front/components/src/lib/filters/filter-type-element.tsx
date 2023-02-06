import { useCatalog } from "@guitar-shop/front/hooks"
import { GuitarType } from "@prisma/client"
import { FormEvent } from "react"
import { GuitarTypeTranslate } from "../cart-item-element/cart-item-element"

type TFilterGuitarTypeElementProps = {
  type: GuitarType
}

export const FilterGuitarTypeElement = ({type}: TFilterGuitarTypeElementProps) => {
  const { handleGuitarTypeInput, types } = useCatalog()

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
      <input onChange={onTypeInput} className="visually-hidden" type="checkbox" id={itemType} name={itemType} checked={types[type]}></input>
      <label htmlFor={itemType}>{title}</label>
    </div>
  )
}
