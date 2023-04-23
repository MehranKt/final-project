import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    showMenu: false,
    showCart: false,
    showSearch: false,
  },
  reducers: {
    openMenu: (state) => {
      state.showMenu = true;
    },
    openCart: (state) => {
      state.showCart = true;
    },
    openSearch: (state) => {
      state.showSearch = true;
    },
    closeMenu: (state) => {
      state.showMenu = false;
    },
    closeCart: (state) => {
      state.showCart = false;
    },
    closeSearch: (state) => {
      state.showSearch = false;
    },
  },
});

export default drawerSlice.reducer;
export const {
  openMenu,
  openCart,
  openSearch,
  closeCart,
  closeMenu,
  closeSearch,
} = drawerSlice.actions;
