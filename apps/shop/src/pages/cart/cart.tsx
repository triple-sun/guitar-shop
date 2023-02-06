import { CartItemElement, PageComponent } from "@guitar-shop/front/components";
import { AppRoute } from "@guitar-shop/front/enums";
import { useUserData } from "@guitar-shop/front/hooks";
import { BreadcrumbsComponent } from "libs/front/components/src/lib/breadcrumbs/breadcrumbs";

export const CartPage = () => {
  const { cart } = useUserData()

  const totalPrice = Object.values(cart).length > 0 ? Object.values(cart).map((item) => (item.count * item.item.price)).reduce((a: number, b: number) => a + b) : 0

  return (
    <main className="page-content">
    <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <BreadcrumbsComponent pages={[
            {name: 'Главная', to: AppRoute.Main},
            {name: 'Каталог', to: AppRoute.Main},
            {name: 'Корзина', to: AppRoute.Cart}
          ]}/>
          <div className="cart">
            {Object.values(cart).map(({item, count}) => <CartItemElement item={item} count={count} key={item.id} cart={cart}/>)}
            <div className="cart__footer">
              <div className="cart__total-info">
                <p className="cart__total-item"><span className="cart__total-value-name">Всего:</span><span className="cart__total-value">{totalPrice} ₽</span></p>
                <p className="cart__total-item"><span className="cart__total-value-name">К оплате:</span><span className="cart__total-value cart__total-value--payment">{totalPrice} ₽</span></p>
              <button className="button button--red button--big cart__order-button">Оформить заказ</button>
          </div>
        </div>
      </div>
    </div>
    </main>
  )
}
