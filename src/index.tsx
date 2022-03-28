import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { CATEGORY } from "./api";
import App from "./App";
import { Articles } from "./components";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Articles />} />
          <Route
            path={CATEGORY.BUSINESS}
            element={<Articles category={CATEGORY.BUSINESS} />}
          />
          <Route
            path={CATEGORY.ENTERTAINMENT}
            element={<Articles category={CATEGORY.ENTERTAINMENT} />}
          />
          <Route
            path={CATEGORY.GENERAL}
            element={<Articles category={CATEGORY.GENERAL} />}
          />
          <Route
            path={CATEGORY.HEALTH}
            element={<Articles category={CATEGORY.HEALTH} />}
          />
          <Route
            path={CATEGORY.SCIENCE}
            element={<Articles category={CATEGORY.SCIENCE} />}
          />
          <Route
            path={CATEGORY.SPORTS}
            element={<Articles category={CATEGORY.SPORTS} />}
          />
          <Route
            path={CATEGORY.TECHNOLOGY}
            element={<Articles category={CATEGORY.TECHNOLOGY} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
