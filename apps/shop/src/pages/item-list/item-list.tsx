import { FilterGuitarTypeComponent, FiltersComponent, FilterStringCountComponent, ItemSortByElement, ItemSortOrderElement } from "@guitar-shop/front/components"
import { AppRoute } from "@guitar-shop/front/enums"
import { useCatalog } from "@guitar-shop/front/hooks"
import { BreadcrumbsComponent } from "libs/front/components/src/lib/breadcrumbs/breadcrumbs"

export const ItemList = () => {
  const {sortBy, handleSortByChange, sortOrder, handleSortOrderChange} = useCatalog({forList: true})

  return (
    <main className="page-content">
        <section className="product-list">
          <div className="container">
            <h1 className="product-list__title">Список товаров</h1>
            <BreadcrumbsComponent pages={[
              {name: 'Главная', to: AppRoute.Main},
              {name: 'Товары', to: AppRoute.Items}
            ]}/>
            <div className="catalog">
              <FiltersComponent>
                <FilterGuitarTypeComponent />
                <FilterStringCountComponent />
              </FiltersComponent>
              <div className="catalog-sort">
                <h2 className="catalog-sort__title">Сортировать:</h2>
                <ItemSortByElement handleChange={handleSortByChange} sortBy={sortBy} forItemList/>
                <ItemSortOrderElement handleChange={handleSortOrderChange} sortOrder={sortOrder}/>
              </div>
              <div className="catalog-cards">
                <ul className="catalog-cards__list">
                  <li className="catalog-item">
                    <div className="catalog-item__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="36" height="93" alt="Картинка гитары"></img>
                      <div className="catalog-item__data-wrapper">
                        <p className="catalog-item__data-title">ЭлектроГитара Честер bass</p>
                        <div className="rate catalog-item__data-rate">
                          <svg width="14" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="14" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="14" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="14" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-full-star"></use>
                          </svg>
                          <svg width="14" height="14" aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Оценка: Хорошо</p>
                        </div>
                        <p className="catalog-item__data-date">Дата добавления 19.09.2022</p>
                        <p className="catalog-item__data-price">17 500 ₽</p>
                      </div>
                    </div>
                    <div className="catalog-item__buttons"><a className="button button--small button--black-border" href="edit-item.html" aria-label="Редактировать товар">Редактировать</a>
                      <button className="button button--small button--black-border" type="submit" aria-label="Удалить товар">Удалить</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className="button product-list__button button--red button--big">Добавить новый товар</button>
            <div className="pagination product-list__pagination">
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
        </section>
      </main>
  )
}


