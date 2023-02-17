import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cartReducer",
  initialState: {
    cart: [],
    prices: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
      // handle total
      state.prices.push(action.payload.price);
      const initialValue = 0;
      state.total = state.prices.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    },

    deleteFromCart: (state, action) => {
      state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});
export default cartReducer;
export const { addToCart, deleteFromCart } = cartReducer.actions;
