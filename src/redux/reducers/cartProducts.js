import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "CART_PRODUCTS",
  initialState: {
    products: [],
    resultSingleProduct: {},
    orderTotal: 0,
  },
  reducers: {
    saveToCart: (state, action) => {
      const { payload } = action;

      const result = state.products.find(
        (product) => product.id === payload.id
      );

      if (!result) {
        state.products.push({
          id: payload?.id,
          image: payload?.image,
          name: payload?.name,
          price: payload?.price,
          count: payload?.count,
          totalPrice: payload?.price,
          isSold: payload?.isSold,
        });
        state.orderTotal += payload.price;
      } else {
        result.totalPrice += payload.price;
      }

      const singleResult = state.products.find(
        (product) => product.id === payload.id
      );
      if (singleResult) {
        state.resultSingleProduct = singleResult;
        state.resultSingleProduct.count += 1;
      }
    },

    saveSingleProduct: (state, action) => {
      const { payload } = action;

      const singleResult = state.products.find(
        (product) => product.id === payload.id
      );
      if (singleResult) {
        state.resultSingleProduct = singleResult;
      } else {
        state.resultSingleProduct = false;
      }
    },

    saveSinglelId: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (payload) {
        state.resultSingleProduct = result;
      }
    },

    checkSold: (state, action) => {
      const { payload } = action;
      const result = state.products.find(
        (product) => product.id === payload.id
      );
      if (!result) {
        state.resultSingleProduct = false;
      }
    },

    remove: (state, action) => {
      const { payload } = action;

      state.products.splice(
        state.products.findIndex((product) => product.id === payload),
        1
      );
    },

    resetCounter: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result) {
        state.orderTotal -= result.totalPrice;
        result.count -= result.count;
      }

      if (state.resultSingleProduct.id === result.id) {
        state.resultSingleProduct.count -= result.count;
        state.resultSingleProduct.isSold = false;
      }
    },

    increment: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result) {
        result.count += 1;
        result.totalPrice += result.price;
        state.orderTotal += result.price;
        state.resultSingleProduct.count += 1;
      }
    },

    decrement: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result && result.count > 1) {
        result.count -= 1;
        result.totalPrice -= result.price;
        state.orderTotal -= result.price;
        state.resultSingleProduct.count -= 1;
      }
    },

    showProductPageIncrement: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result) {
        result.count += 1;
        result.totalPrice += result.price;
        state.orderTotal += result.price;
        state.resultSingleProduct.count += 1;
      }
    },

    showProductPageDecrement: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result) {
        result.count -= 1;
        result.totalPrice -= result.price;
        state.orderTotal -= result.price;
        state.resultSingleProduct.count -= 1;
      }

      if (state.resultSingleProduct.count === 0) {
        state.resultSingleProduct = false;
        state.products.splice(
          state.products.findIndex(
            (product) => product.id === state.resultSingleProduct.id
          ),
          1
        );
      }
    },

    clickIcon: (state, action) => {
      const { payload } = action;
      const result = state.products.find((product) => product.id === payload);

      if (result && result.count > 1) {
        state.orderTotal += result.price;
        state.orderTotal -= result.totalPrice;
        state.products.splice(
          state.products.findIndex((product) => product.id === payload),
          1
        );
      }
    },

    sales: (state, action) => {
      state.products = [];
      state.resultSingleProduct = {};
      state.orderTotal = 0;
    },
  },
});

export const {
  saveToCart,
  checkSold,
  remove,
  resetCounter,
  increment,
  decrement,
  showProductPageDecrement,
  showProductPageIncrement,
  clickIcon,
  saveSingleProduct,
  saveSinglelId,
  sales,
} = cartSlice.actions;
export default cartSlice.reducer;
