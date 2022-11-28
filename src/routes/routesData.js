import React, { lazy } from "react";

const AllProducts = lazy(() => import("@pages/AllProducts"));
const ShowProduct = lazy(() => import("@pages/ShowProduct"));
const Cart = lazy(() => import("@pages/Cart"));
const NoPage = lazy(() => import("@pages/404"));

const routes = [
  {
    path: "products/:title/:price_to/:price_from/:brand_title/:floor_title/:size_title/:groupTitle",
    component: <AllProducts />,
  },
  {
    path: "show-product/:name/:id",
    component: <ShowProduct />,
  },
  {
    path: "cart",
    component: <Cart />,
  },
  {
    path: "*",
    component: <NoPage />,
  },
];

export default routes;
