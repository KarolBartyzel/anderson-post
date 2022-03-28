import { ReactNode, useState } from "react";
import classnames from "classnames";

import { HamburgerIcon } from "../../assets/icons";

import "./PageHeaderActions.scss";

type Props = {
  children: ReactNode;
};

const PageHeaderActions = ({ children }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerClick = () =>
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);

  return (
    <>
      <div className="page-header-actions__mobile">
        <HamburgerIcon
          className={classnames("page-header-actions__icon", {
            "page-header-actions__icon--focused": isMenuOpen,
          })}
          onClick={handleHamburgerClick}
        />
        <div
          className={classnames("page-header-actions__overlay", {
            "page-header-actions__overlay--focused": isMenuOpen,
          })}
        >
          {children}
        </div>
      </div>
      <div className="page-header-actions__web">{children}</div>
    </>
  );
};

export default PageHeaderActions;
