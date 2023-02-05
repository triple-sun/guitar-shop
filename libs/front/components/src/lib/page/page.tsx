import { PropsWithChildren } from "react";
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/header";

export const PageComponent = ({children}: PropsWithChildren) => (
  <>
    <HeaderComponent />
    <main className="page-content">
      {children}
      </main>
    <FooterComponent />
  </>
)
