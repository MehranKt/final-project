import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const itemIndex = state.products.findIndex(
        (item) => item.id === product.id
      );

      if (itemIndex === -1) {
        state.products.push({ ...product, quantity: 1 });
      } else {
        state.products[itemIndex].quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    clearBasket: (state) => {
      state.products = [];
    },
    increaseQty: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.products.findIndex((item) => item.id === id);
      state.products[itemIndex].quantity += 1;
    },
    decreaseQty: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.products.findIndex((item) => item.id === id);
      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      }
    },
  },
});

export const cartSubtotalSelector = createSelector(
  (state) => state.cart,
  (cart) => {
    return cart.products.reduce((acc, product) => {
      acc += product.price * product.quantity;
      return acc;
    }, 0);
  }
);

export default cartSlice.reducer;
export const { addItem, removeItem, clearBasket, increaseQty, decreaseQty } =
  cartSlice.actions;
