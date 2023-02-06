import { ItemTab } from "@guitar-shop/front/enums"
import { TGuitar } from "@guitar-shop/front/types"
import { MouseEvent, useState } from "react"
import { Link } from "react-router-dom"
import { GuitarTypeTranslate } from "../cart-item-element/cart-item-element"
import { StringCountToNumber } from "../filters/filter-strings-element"

export const ItemTabsComponent = ({sku, type, strings}: Pick<TGuitar, 'sku' | 'type' | 'strings'>) => {
  const [activeTab, setActiveTab] = useState(ItemTab.Characteristics)

  const onCharClick = (evt: MouseEvent<HTMLAnchorElement>) => {evt.preventDefault(); setActiveTab(ItemTab.Characteristics)}
  const onDescClick = (evt: MouseEvent<HTMLAnchorElement>) => {evt.preventDefault(); setActiveTab(ItemTab.Description)}


  return(
    <div className="tabs">
      <Link className="button button--medium tabs__button" to="" onClick={onCharClick}>Характеристики</Link>
      <Link className="button button--black-border button--medium tabs__button" to="" onClick={onDescClick}>Описание</Link>
        <div className="tabs__content" id={activeTab.toLowerCase().toString()}>
          <table className={`tabs__table ${activeTab !== ItemTab.Characteristics ? 'hidden' : ''}`}>
            <tbody>
            <tr className="tabs__table-row">
              <td className="tabs__title">Артикул:</td>
            <td className="tabs__value">{sku}</td>
            </tr>
            <tr className="tabs__table-row">
            <td className="tabs__title">Тип:</td>
            <td className="tabs__value">{GuitarTypeTranslate[type]}</td>
            </tr>
            <tr className="tabs__table-row">
              <td className="tabs__title">Количество струн:</td>
              <td className="tabs__value">{StringCountToNumber[strings]} струнная</td>
            </tr>
          </tbody>
          </table>
        <p className={`tabs__product-description ${activeTab !== ItemTab.Description ? 'hidden' : ''}`}>Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.</p>
      </div>
    </div>
)}
