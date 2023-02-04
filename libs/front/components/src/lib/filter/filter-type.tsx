import { useItems } from "@guitar-shop/front/hooks"
import { FormEvent } from "react"
import { GuitarType } from "@prisma/client"

const types = Object.values(GuitarType)

const TypesToItems = {
  [GuitarType.Acoustic]: {title: 'Акустические гитары', type: 'acoustic'},
  [GuitarType.Electric]: {title: 'Электрогитары', type: 'electric'},
  [GuitarType.Ukulele]: {title: 'Укулеле', type: 'ukulele'}
};

export const FilterGuitarTypeComponent = () => {
  const { handleGuitarTypeInput, guitarTypes } = useItems()

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
                {types.map((type) => {
                  const {type: value, title} = TypesToItems[type]
                    const onTypeInput = (evt: FormEvent<HTMLInputElement>) => {
                      evt.preventDefault()
                      handleGuitarTypeInput(type)
                    }

                    return (
                  <div className="form-checkbox catalog-filter__block-item" key={type}>
                    <input onChange={onTypeInput} className="visually-hidden" type={value} id={value} name={value} checked={guitarTypes.includes(type)} value={type}></input>
                    <label htmlFor="acoustic">{title}</label>
                  </div>
                )})}
    </fieldset>
)}
