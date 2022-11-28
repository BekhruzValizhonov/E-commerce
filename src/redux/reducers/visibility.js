import { createSlice } from "@reduxjs/toolkit";

const visibilitySlice = createSlice({
  name: "VISIBILITY_SEARCH",
  initialState: {
    searchNavbar: false,
    searchDialog: false,
    congratulation: false,
  },
  reducers: {
    changeVisibility: (state, action) => {
      const { payload } = action;
      state.searchNavbar = payload;
    },

    changeVisibilityDialog: (state, action) => {
      const { payload } = action;
      state.searchDialog = payload;
    },

    changeVisibilityAlert: (state, action) => {
      const { payload } = action;
      state.congratulation = payload;
    },
  },
});

export const {
  changeVisibility,
  changeVisibilityDialog,
  changeVisibilityAlert,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
