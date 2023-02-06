import { AppRoute } from "@guitar-shop/front/enums"
import { useUserData } from "@guitar-shop/front/hooks"
import { TGuitar } from "@guitar-shop/front/types"
import { MouseEvent } from "react"
import { Link } from "react-router-dom"
import { RatingComponent } from "../rating-element/rating-element"

export const CardElement = (item: TGuitar) => {
  const { cart, handleAddToCart } = useUserData()

  const {id, reviewCount, totalRating, model, photo, price} = item

  const photoSrc = photo.replace('markup', './assets')
  const photoSrcSet = `${photoSrc.replace('.png', '@2x.png' )} 2x`

  const isInCart = !!cart[item.id]

  const onAddToCartClick = (evt: MouseEvent<HTMLAnchorElement>) => {evt.preventDefault(); handleAddToCart(item)}

  return (
  <div className="product-card"><img src={photoSrc} srcSet={photoSrcSet} width="75" height="190" alt={model} />
    <div className="product-card__info">
      <div className="rate product-card__rate">
        <RatingComponent totalRating={totalRating} reviewCount={reviewCount}/>
      </div>
      <p className="product-card__title">{model}</p>
      <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
    </div>
    <div className="product-card__buttons">
    <Link className="button button--mini" to={`${AppRoute.Items}/${id}`}>Подробнее</Link>
      {isInCart
        ? <Link className="button button--red-border button--mini button--in-cart" to="/" onClick={onAddToCartClick}>В корзине</Link>
        : <Link className="button button--red button--mini button--add-to-cart" to="/" onClick={onAddToCartClick}>Купить</Link>
      }
    </div>
  </div>
)}
