import { PropsWithChildren } from "react";
import FooterComponent from "../footer/footer";
import HeaderComponent from "../header/header";

export const PageComponent = ({children}: PropsWithChildren) => (
  <>
    <HeaderComponent />
      {children}
    <FooterComponent />
  </>
)
