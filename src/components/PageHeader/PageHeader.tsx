import { LogoIcon } from "../../assets/icons";
import PageHeaderActions from "../PageHeaderActions";
import PageHeaderActionsItem from "../PageHeaderActionsItem";
import PageHeaderSearch from "../PageHeaderSearch";

import "./PageHeader.scss";

const PageHeader = () => {
  const handleNewsletterClick = () => {};
  const handleSignInClick = () => {};
  const handleSubscribeClick = () => {};

  return (
    <header className="page-header">
      <PageHeaderActions>
        <PageHeaderActionsItem
          title="Newsletter"
          onClick={handleNewsletterClick}
        />
        <PageHeaderActionsItem title="Sign In" onClick={handleSignInClick} />
        <PageHeaderActionsItem
          title="Subscribe"
          onClick={handleSubscribeClick}
          isContained
        />
      </PageHeaderActions>
      <LogoIcon className="page-header__title" />
      <PageHeaderSearch />
    </header>
  );
};

export default PageHeader;
