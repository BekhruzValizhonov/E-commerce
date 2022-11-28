import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import homeShopApi from "../services/homeShopApi";
import cartSlice from "./reducers/cartProducts";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import visibility from "./reducers/visibility";

const rootReducer = combineReducers({
  cart: cartSlice,
  // [homeShopApi.reducerPath]: homeShopApi.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blackList: ["homeShopApi"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    visibility,
    [homeShopApi.reducerPath]: homeShopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(homeShopApi.middleware),
});

export const persistor = persistStore(store);
