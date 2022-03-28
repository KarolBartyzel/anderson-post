import classnames from "classnames";

import "./PageHeaderActionsItem.scss";

type Props = {
  title: string;
  onClick: () => void;
  isContained?: boolean;
};

const PageHeaderActionsItem = ({
  title,
  onClick,
  isContained = false,
}: Props) => (
  <button
    className={classnames("page-header-actions-item", {
      "page-header-actions-item--contained": isContained,
    })}
    onClick={onClick}
  >
    {title}
  </button>
);

export default PageHeaderActionsItem;
