import { CartItemElement, PageComponent } from "@guitar-shop/front/components";
import { EAppRoute } from "@guitar-shop/front/enums";
import { useItems, useUserData } from "@guitar-shop/front/hooks";
import { getIndexes, getTotalPrice } from "@guitar-shop/front/utils";
import { BreadcrumbsComponent } from "libs/front/components/src/lib/breadcrumbs/breadcrumbs";

export const CartPage = () => {
  const {cart} = useUserData()
  const items = Object.values(cart)

  const totalPrice = getTotalPrice(items)

  return (
  <PageComponent>
    <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <BreadcrumbsComponent pages={[
            {name: 'Главная', to: EAppRoute.Main},
            {name: 'Каталог', to: EAppRoute.Main},
            {name: 'Корзина', to: EAppRoute.Cart}
          ]}/>
          <div className="cart">
            {items.map(({item, count}) => <CartItemElement item={item} count={count} key={item.id}/>)}
            <div className="cart__footer">
              <div className="cart__total-info">
                <p className="cart__total-item"><span className="cart__total-value-name">Всего:</span><span className="cart__total-value">{totalPrice} ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">{totalPrice} ₽</span></p>
                <button className="button button--red button--big cart__order-button">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
  </PageComponent>
)
}
