import {
  CardElement,
  FiltersComponent,
  PaginationComponent,
  FilterPriceComponent,
  FilterGuitarTypeComponent,
  FilterStringCountComponent,
  ItemSortByElement,
  ItemSortOrderElement,
} from '@guitar-shop/front/components';
import { AppRoute } from '@guitar-shop/front/enums';
import { useCatalog } from '@guitar-shop/front/hooks';
import { BreadcrumbsComponent } from 'libs/front/components/src/lib/breadcrumbs/breadcrumbs';

export const CatalogPage = () => {
  const {
    items,
    sortBy,
    handleSortByChange,
    sortOrder,
    handleSortOrderChange,
  } = useCatalog({ forList: true });

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">
          Каталог гитар
        </h1>
        <BreadcrumbsComponent
          pages={[
            { name: 'Главная', to: AppRoute.Main },
            { name: 'Каталог', to: AppRoute.Main },
          ]}
        />
        <div className="catalog">
          <FiltersComponent>
            <FilterPriceComponent />
            <FilterGuitarTypeComponent />
            <FilterStringCountComponent />
          </FiltersComponent>
          <div className="catalog-sort">
            <h2 className="catalog-sort__title">Сортировать:</h2>
            <ItemSortByElement
              handleChange={handleSortByChange}
              sortBy={sortBy}
            />
            <ItemSortOrderElement
              handleChange={handleSortOrderChange}
              sortOrder={sortOrder}
            />
          </div>
          <div className="cards catalog__cards">
            {items.map((item) => (
              <CardElement {...item} key={item.id} />
            ))}
          </div>
          <PaginationComponent />
        </div>
      </div>
    </main>
  );
};
