import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routesData";

const Layout = lazy(() => import("./Layout"));
const Home = lazy(() => import("@pages/Home"));

const LayoutRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.component}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default LayoutRoutes;
