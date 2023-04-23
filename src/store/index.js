import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import drawerReducer from "./drawerSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    drawer: drawerReducer,
  },
});

export default store;
