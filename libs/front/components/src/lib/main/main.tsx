import { EAppRoute } from "@guitar-shop/front/enums"
import { useItems } from "@guitar-shop/front/hooks"
import { BreadcrumbsComponent } from "../breadcrumbs/breadcrumbs"
import { CardElement } from "../card-element/card-element"
import { FilterPriceComponent } from "../filter/filter-price"
import { FilterStringCountComponent } from "../filter/filter-strings"
import { FilterGuitarTypeComponent } from "../filter/filter-type"

export const MainComponent = () => {
  const {items} = useItems()

  return (
  <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <BreadcrumbsComponent name='Каталог' to={EAppRoute.Main} />
          <div className="catalog">
            <form className="catalog-filter">
              <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
              <FilterPriceComponent />
              <FilterGuitarTypeComponent />
              <FilterStringCountComponent />
              <button className="catalog-filter__reset-btn button button--black-border button--medium" type="reset">Очистить</button>
            </form>

            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button className="catalog-sort__type-button" aria-label="по цене">по цене</button>
                <button className="catalog-sort__type-button" aria-label="по популярности">по популярности</button>
              </div>
              <div className="catalog-sort__order">
                <button className="catalog-sort__order-button catalog-sort__order-button--up" aria-label="По возрастанию"></button>
                <button className="catalog-sort__order-button catalog-sort__order-button--down" aria-label="По убыванию"></button>
              </div>
            </div>

            <div className="cards catalog__cards">
              {items.map((item) => <CardElement {...item} key={item.id}/>)}
            </div>

            <div className="pagination page-content__pagination">
              <ul className="pagination__list">
                <li className="pagination__page pagination__page--active"><a className="link pagination__page-link" href="1">1</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="2">2</a>
                </li>
                <li className="pagination__page"><a className="link pagination__page-link" href="3">3</a>
                </li>
                <li className="pagination__page pagination__page--next" id="next"><a className="link pagination__page-link" href="2">Далее</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
)}

export default MainComponent
