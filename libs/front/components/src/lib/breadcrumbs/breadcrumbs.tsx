import { EAppRoute } from "@guitar-shop/front/enums"
import { Link } from "react-router-dom"

type TBreadcrumbItem = {
  name: string,
  to: EAppRoute
}

type TBreadcrumbsProps = {
  pages: TBreadcrumbItem[]
}

export const BreadcrumbsComponent = ({pages}: TBreadcrumbsProps) => {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      {pages.map((page) => <li className="breadcrumbs__item" key={page.name}><Link className="link" to={page.to}>{page.name}</Link></li>)}
    </ul>
)}
