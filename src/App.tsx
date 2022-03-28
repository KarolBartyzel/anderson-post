import { Outlet } from "react-router-dom";

import { PageHeader, PageNavigation, PageNavigationItem } from "./components";
import { CATEGORY } from "./api";

import "./App.scss";

const App = () => (
  <main className="app">
    <PageHeader />
    <PageNavigation>
      <PageNavigationItem title="Top Headlines" link="/" />
      <PageNavigationItem title="Business" link={CATEGORY.BUSINESS} />
      <PageNavigationItem title="Entertainment" link={CATEGORY.ENTERTAINMENT} />
      <PageNavigationItem title="General" link={CATEGORY.GENERAL} />
      <PageNavigationItem title="Health" link={CATEGORY.HEALTH} />
      <PageNavigationItem title="Science" link={CATEGORY.SCIENCE} />
      <PageNavigationItem title="Sports" link={CATEGORY.SPORTS} />
      <PageNavigationItem title="Technology" link={CATEGORY.TECHNOLOGY} />
    </PageNavigation>
    <Outlet />
  </main>
);

export default App;
