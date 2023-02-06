import { useUserData } from "@guitar-shop/front/hooks"
import { TCart, TGuitar } from "@guitar-shop/front/types"
import { GuitarType } from "@prisma/client"
import { MouseEvent } from "react"
import { StringCountToNumber } from "../filters/filter-strings-element"

type TCartItemElementProps = {
  item: TGuitar, count: number, cart: TCart
}

export const GuitarTypeTranslate = {
  [GuitarType.Acoustic]: 'Акустическая гитара',
  [GuitarType.Electric]: 'Электрогитара',
  [GuitarType.Ukulele]: 'Укулеле'
}

export const CartItemElement = ({item, count, cart}: TCartItemElementProps) => {
  const { handleRemoveFromCart, handleIncreaseCount, handleDecreaseCount } = useUserData()

  const { photo, model, type, strings, sku, price} = item
  const photoSrc = photo.replace('markup', './assets')
  const photoSrcSet = `${photoSrc.replace('.png', '@2x.png' )} 2x`

  const onRemoveClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleRemoveFromCart(item.id);}
  const onIncreaseCountClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleIncreaseCount(item.id)}
  const onDecreaseCountClick = (evt: MouseEvent<HTMLButtonElement>) => {evt.preventDefault(); handleDecreaseCount(item.id)}

  return count > 0
    ? (
    <div className="cart-item">
        <button className="cart-item__close-button button-cross" type="button" aria-label="Удалить" onClick={onRemoveClick}>
          <span className="button-cross__icon"></span>
          <span className="cart-item__close-button-interactive-area"></span>
        </button>
              <div className="cart-item__image"><img src={photoSrc} srcSet={photoSrcSet} width="55" height="130" alt={model}/>
              </div>
              <div className="product-info cart-item__info">
                <p className="product-info__title">{model}</p>
                <p className="product-info__info">Артикул: {sku}</p>
                <p className="product-info__info">{GuitarTypeTranslate[type]}, {StringCountToNumber[strings]} струнная</p>
              </div>
              <div className="cart-item__price">{price} ₽</div>
              <div className="quantity cart-item__quantity">
                <button className="quantity__button" aria-label="Уменьшить количество" onClick={onDecreaseCountClick}>
                  <svg width="8" height="8" aria-hidden="true"><use xlinkHref="#icon-minus"></use></svg>
                </button>
                <input className="quantity__input" type="number" placeholder={count.toString()} id={`${count}-count"`} name={`${count}-count"`} max="99"></input>
                <button className="quantity__button" aria-label="Увеличить количество" onClick={onIncreaseCountClick} disabled={count >= 99}>
                  <svg width="8" height="8" aria-hidden="true"><use xlinkHref="#icon-plus"></use></svg>
                </button>
        </div>
      <div className="cart-item__price-total">{item.price * count} ₽</div>
  </div>
  )
  : <p/>
}
