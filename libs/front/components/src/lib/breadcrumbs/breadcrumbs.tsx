import { EAppRoute } from "@guitar-shop/front/enums"
import { Link } from "react-router-dom"

export type TBreadcrumbsProps = {
  name: string,
  to: EAppRoute
}

export const BreadcrumbsComponent = (page: TBreadcrumbsProps) => {
  const items = [{name: 'Главная', to: EAppRoute.Main}, page]

  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      {items.map((item) => <li className="breadcrumbs__item" key={item.name}><Link className="link" to={item.to}>{item.name}</Link></li>)}
    </ul>
)}
