import { CardElement, FilterComponent, PaginationComponent, PageComponent, SortComponent } from '@guitar-shop/front/components';
import { EAppRoute } from '@guitar-shop/front/enums';
import { useItems } from '@guitar-shop/front/hooks';
import { BreadcrumbsComponent } from 'libs/front/components/src/lib/breadcrumbs/breadcrumbs';

export const CatalogPage = () => {
  const {items} = useItems()

  return (
    <PageComponent>
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <BreadcrumbsComponent pages={[
              {name: 'Главная', to: EAppRoute.Main},
              {name: 'Каталог', to: EAppRoute.Main}
            ]}/>
          <div className="catalog">
          <FilterComponent />
          <SortComponent />
          <div className="cards catalog__cards">
              {items.map((item) => <CardElement {...item} key={item.id}/>)}
          </div>
          <PaginationComponent />
          </div>
        </div>
    </PageComponent>
  );
};

export default CatalogPage;
