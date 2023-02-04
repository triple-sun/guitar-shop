import { TGuitar } from "@guitar-shop/front/types"
import { getRatings } from "@guitar-shop/front/utils"

export const CardElement = ({reviewCount, totalRating, model, description, type, photo, sku, strings, createdAt, price}: TGuitar) => {
  const ratings = getRatings(totalRating)
  return (
  <div className="product-card"><img src={photo} width="75" height="190" alt={model} />
                <div className="product-card__info">
                  <div className="rate product-card__rate">
                    {
                      ratings.map((rating) => <svg width="12" height="11" aria-hidden="true" key={rating}><use xlinkHref="#icon-star"></use></svg>)
                    }
                    <p className="visually-hidden">Рейтинг: Хорошо</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
                  </div>
                  <p className="product-card__title">{model}</p>
                  <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽
                  </p>
                </div>
                <div className="product-card__buttons">
                  <a className="button button--mini" href="/cart">Подробнее</a>
                  <a className="button button--red button--mini button--add-to-cart" href="/cart">Купить</a>
                </div>
  </div>
)}
