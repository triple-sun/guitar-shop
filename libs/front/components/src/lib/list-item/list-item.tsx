import { TGuitar } from "@guitar-shop/front/types"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { RatingComponent } from "../rating-element/rating-element"

export const ListItemElement = (item: TGuitar) => {

  const {totalRating, model, photo, price, createdAt} = item
  const created = format(createdAt, 'P', {locale: ru})

  const photoSrc = photo.replace('markup', './assets')
  const photoSrcSet = `${photoSrc.replace('.png', '@2x.png' )} 2x`

  return (
    <li className="catalog-item">
                    <div className="catalog-item__data"><img src={photoSrc} srcSet={photoSrcSet} width="36" height="93" alt="Картинка гитары"></img>
                      <div className="catalog-item__data-wrapper">
                        <p className="catalog-item__data-title">{model}</p>
                        <div className="rate catalog-item__data-rate">
                          <RatingComponent totalRating={totalRating}/>
                        </div>
                        <p className="catalog-item__data-date">Дата добавления {created}</p>
                        <p className="catalog-item__data-price">{price} ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
  )
}

