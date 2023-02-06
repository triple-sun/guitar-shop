import { AppRoute } from "@guitar-shop/front/enums"
import { useCurrentOrder } from "@guitar-shop/front/hooks"
import { formatOrderId } from "@guitar-shop/front/utils"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { BreadcrumbsComponent } from "libs/front/components/src/lib/breadcrumbs/breadcrumbs"
import { useParams } from "react-router-dom"

export const OrderPage = () => {
  const id = Number(useParams().id);

  const { order } = useCurrentOrder(id)
  const { itemCount, createdAt, orderPrice } =  order

  const orderNumber = formatOrderId(order.id)
  const created = format(createdAt, 'P', {locale: ru})

  return (
      <main className="page-content">
        <section className="order">
          <div className="container">
            <h1 className="order__title">Заказ № {orderNumber}</h1>
            <BreadcrumbsComponent pages={[
              {name: 'Каталог', to: AppRoute.Main},
              {name: 'Заказы', to: AppRoute.Orders},
              {name: `Заказ № ${orderNumber}`, to: `${AppRoute.Orders}/${id}`}
            ]}/>
            <table className="order-table">
              <tbody>
                <tr>
                  <td>Общее количество товаров</td>
                  <td>{itemCount}</td>
                </tr>
                <tr>
                  <td>Дата заказа</td>
                  <td>{created}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>К оплате</td>
                  <td>{orderPrice} <span>₽</span></td>
                </tr>
              </tfoot>
            </table>
            <ul className="order__list order-list">
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары"></img>
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">1</span><span className="order-list__price">17 500 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары"></img>
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">2</span><span className="order-list__price">35 000 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
              <li className="order-list__item">
                <div className="order-list__data"><img src="img/content/catalog-product-1.png" srcSet="img/content/catalog-product-1@2x.png 2x" width="60" height="130" alt="Картинка гитары"></img>
                  <div className="order-list__container">
                    <p className="order-list__name">ЭлектроГитара Честер bass</p>
                    <p className="order-list__lot">Артикул: SO757575</p>
                    <p className="order-list__parameters">Электрогитара, 6 струнная</p>
                  </div>
                </div><span className="order-list__quantity">1</span><span className="order-list__price">17 500 ₽</span>
                <button className="order-list__button button-cross" type="button" aria-label="Закрыть"><span className="button-cross__icon"></span>
                </button>
              </li>
            </ul>
            <button className="button order__button button--small button--black-border">Вернуться к списку заказов</button>
          </div>
        </section>
      </main>
  )
}


