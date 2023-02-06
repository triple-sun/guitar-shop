import { ItemComponent, PageComponent } from "@guitar-shop/front/components";
import { AppRoute } from "@guitar-shop/front/enums"
import { useAppDispatch } from "@guitar-shop/front/hooks";
import { fetchCurrentItemAction } from "@guitar-shop/front/store";
import { BreadcrumbsComponent } from "libs/front/components/src/lib/breadcrumbs/breadcrumbs"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ItemPage = () => {
  const id = Number(useParams().id);

  const dispatch = useAppDispatch()

  useEffect(() => {
      dispatch(fetchCurrentItemAction(id))
  }, [])

  return (
    <main className="page-content">
    <div className="container">
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <BreadcrumbsComponent pages={[
            {name: 'Главная', to: AppRoute.Main},
            {name: 'Каталог', to: AppRoute.Main},
            {name: 'Товар', to: `${AppRoute.Items}/${id}`}
          ]} />
        <ItemComponent id={id}/>
    </div>
    </main>
  )
}
