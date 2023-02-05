import { EAppRoute } from "@guitar-shop/front/enums"
import { useUserData } from "@guitar-shop/front/hooks"
import { TGuitar } from "@guitar-shop/front/types"
import { handleTotalRating } from "@guitar-shop/front/utils"
import { MouseEvent } from "react"
import { Link } from "react-router-dom"

export const CardElement = (item: TGuitar) => {
  const { handleAddToCartClick } = useUserData()
  const {id, reviewCount, totalRating, model, photo, price} = item
  const photoSrc = photo.replace('markup', './assets')
  const {ratings, rating} = handleTotalRating(totalRating)

  const onAddToCartClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault()
    handleAddToCartClick(item)
  }

  return (
  <div className="product-card"><img src={photoSrc} width="75" height="190" alt={model} />
    <div className="product-card__info">
      <div className="rate product-card__rate">
        {ratings.map((rating) => <svg width="12" height="11" aria-hidden="true" key={rating}><use xlinkHref="#icon-star"></use></svg>)}
        <p className="visually-hidden">{reviewCount > 0 ? `Рейтинг: ${rating}` : `Недостаточно оценок`}</p>
        <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
      </div>
      <p className="product-card__title">{model}</p>
      <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
    </div>
    <div className="product-card__buttons">
    <Link className="button button--mini" to={`${EAppRoute.Items}/${id}`}>Подробнее</Link>
    <Link className="button button--red button--mini button--add-to-cart" to="/" onClick={onAddToCartClick}>Купить</Link>
    </div>
  </div>
)}
