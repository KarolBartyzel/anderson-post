import { ReactNode } from "react";

import "./PageNavigation.scss";

type Props = {
  children: ReactNode;
};

const PageNavigation = ({ children }: Props) => (
  <nav className="page-navigation">{children}</nav>
);

export default PageNavigation;
