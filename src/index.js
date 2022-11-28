import React from "react";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Loader from "./Components/Loader";

import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import "./i18n";

import "slick-carousel/slick/slick.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Suspense
        fallback={
          <div className="loader_spinner">
            <Loader />
          </div>
        }
      >
        <App />
      </Suspense>
    </PersistGate>
  </Provider>
);
