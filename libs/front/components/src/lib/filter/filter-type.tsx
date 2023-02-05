import { GuitarType } from "@prisma/client"
import { FilterGuitarTypeElement } from "./filter-type-element"

export const FilterGuitarTypeComponent = () => {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
                {Object.values(GuitarType).map((type) => <FilterGuitarTypeElement type={GuitarType[type]} key={type} />)}
    </fieldset>
)}
