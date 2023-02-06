import { TGuitar } from "@guitar-shop/front/types"
import { GuitarTypeTranslate } from "../cart-item-element/cart-item-element"
import { StringCountToNumber } from "../filters/filter-strings-element"

export const OrderItemElement = ({item, count}: {item: TGuitar, count: number}) => {
  const {model, sku, strings, price, type} = item

  return (
    <li className="order-list__item">
      <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары"></img>
        <div className="order-list__container">
          <p className="order-list__name">{model}</p>
          <p className="order-list__lot">Артикул: {sku}</p>
          <p className="order-list__parameters">{GuitarTypeTranslate[type]}, {StringCountToNumber[strings]} струнная</p>
        </div>
      </div>
      <span className="order-list__quantity">{count}</span>
      <span className="order-list__price">{price * count} ₽</span>
      <button className="order-list__button button-cross" type="button" aria-label="Закрыть">
        <span className="button-cross__icon"></span>
      </button>
    </li>
  )
}

