import { useCurrentItem, useUserData } from "@guitar-shop/front/hooks"
import { MouseEvent } from "react"
import { Link } from "react-router-dom"
import { RatingComponent } from "../rating-element/rating-element"
import { ItemTabsComponent } from "../item-tabs/item-tabs"
import { ReviewElement } from "../review-element/review-element"

export const ItemComponent = ({id}: {id: number}) => {
  const { item, reviews, isLoading } = useCurrentItem(id)
  const { cart, handleAddToCart } = useUserData()

  if (item && reviews && !isLoading) {
  const {reviewCount, totalRating, model, photo, price, sku, type, strings} = item

  const photoSrc = photo.replace('markup', './assets')
  const photoSrcSet = `${photoSrc.replace('.png', '@2x.png' )} 2x`

  const isInCart = !!cart[item.id]
  const onAddToCartClick = (evt: MouseEvent<HTMLAnchorElement>) => {evt.preventDefault(); handleAddToCart(item)}

  return (
    <>
    <div className="product-container">
            <img className="product-container__img" src={photoSrc} srcSet={photoSrcSet} width="90" height="235" alt=""></img>
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{model}</h2>
              <div className="rate product-container__rating">
                <RatingComponent totalRating={totalRating} reviewCount={reviewCount} />
              </div>
              <ItemTabsComponent sku={sku} type={type} strings={strings}/>
            </div>
            <div className="product-container__price-wrapper">
              <p className="product-container__price-info product-container__price-info--title">Цена:</p>
              <p className="product-container__price-info product-container__price-info--value">{price} ₽</p>
              {
                isInCart
                  ? <Link className="button button--red button--big product-container__button" to="/">Оформить заказ</Link>
                  : <Link className="button button--red button--big product-container__button" to="/" onClick={onAddToCartClick}>Добавить в корзину</Link>
              }
            </div>
          </div>

          <section className="reviews">
            <h3 className="reviews__title title title--bigger">Отзывы</h3>
            <Link className="button button--red-border button--big reviews__sumbit-button" to="/">Оставить отзыв</Link>
            {reviews.map((review) => <ReviewElement review={review}/>)}
            <button className="button button--medium reviews__more-button">Показать еще отзывы</button>

            <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
          </section>
    </>
  )}

  return <p/>
}
