import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

import "./PageNavigationItem.scss";

type Props = {
  title: string;
  link: string;
};

const PageNavigationItem = ({ title, link }: Props) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={classnames("page-navigation-item", {
        "page-navigation-item--current": pathname.endsWith(link),
      })}
      to={link}
    >
      {title}
    </Link>
  );
};

export default PageNavigationItem;
